import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { setSRMessage } from '../actions/ui';
import { trackPage } from '../middleware/analytics.js';
import { TOP_ID } from '../utils/constants';

import GlobalStyle from './GlobalStyle';
import SkipNav from './SkipNav';
import Header from './Header';
import Home from './Home';
import Results from './Results';
import Details from './Details';
import Content from './Content';
import Error from './Error';
import NoMatch from './NoMatch';
import Footer from './Footer';
import SRAnnouncements from './SRAnnouncements';

class App extends Component {
  trackInDap = false;

  track = (page, title) => {
    // DAP is loaded before React and fires a pageview on load
    // To avoid double counting, we send our _first_ pageview only to
    // ReactGA
    trackPage(this.trackInDap, page, title);
    if (!this.trackInDap) {
      this.trackInDap = true;
    }
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.location.pathname === this.props.location.pathname
      ? false
      : true;
  }

  render() {
    const { isReactSnap, setSRMessage } = this.props;

    return (
      <>
        <Helmet
          titleTemplate={`%s | ${process.env.REACT_APP_SITE_TITLE}`}
          defaultTitle={process.env.REACT_APP_SITE_TITLE}
          onChangeClientState={newState => {
            this.track(window.location.pathname, newState.title);
            if (!this.trackInDap) return;
            setSRMessage(newState.title);
            const el =
              document.querySelector('h1') || document.querySelector('h2');
            if (!el) return;
            el.focus();
            window.scrollTo(0, 0);
          }}
        >
          <title>{process.env.REACT_APP_SITE_TITLE}</title>
          <meta
            property="og:title"
            content={process.env.REACT_APP_SITE_TITLE}
          />
          <meta
            name="description"
            content="Find state-licensed treatment near you for addiction and substance use disorder."
          />
          <meta
            property="og:description"
            content="Find state-licensed treatment near you for addiction and substance use disorder."
          />
          <meta
            property="og:url"
            content={
              process.env.REACT_APP_SITE_DOMAIN + this.props.location.pathname
            }
          />
          <meta
            property="og:image"
            content={`${process.env.REACT_APP_SITE_DOMAIN}/thumbnail-small.png`}
          />
          <meta
            property="og:site_name"
            content={process.env.REACT_APP_SITE_TITLE}
          />
          <link
            rel="canonical"
            href={
              process.env.REACT_APP_SITE_DOMAIN + this.props.location.pathname
            }
          />
        </Helmet>
        <GlobalStyle />
        <div css={tw`overflow-hidden`} id={TOP_ID} tabIndex="-1">
          <SkipNav to="#main" />
          <SRAnnouncements />
          <Header />
          <main role="main" id="main" tabIndex="-1">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/results" component={Results} />
              <Route path="/details/:frid" component={Details} />
              <Route
                path="/content/:sectionID/:subSectionID?"
                component={Content}
              />
              <Route path="/error" component={Error} />
              <Route>
                <NoMatch isReactSnap={isReactSnap} />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isReactSnap: PropTypes.bool.isRequired
};

App.defaultProps = {
  isReactSnap: false
};

const mapDispatchToProps = { setSRMessage };

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
