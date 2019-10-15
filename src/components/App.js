import React, { Component } from 'react';
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
  topRef = React.createRef();

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

  render() {
    return (
      <>
        <Helmet
          titleTemplate={`%s | ${process.env.REACT_APP_SITE_TITLE}`}
          defaultTitle={process.env.REACT_APP_SITE_TITLE}
          onChangeClientState={newState => {
            this.track(window.location.pathname, newState.title);
            setSRMessage(newState.title);
            const el = this.topRef.current;
            el.focus();
            el.scrollIntoView();
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
        </Helmet>
        <GlobalStyle />
        <div
          css={tw`overflow-hidden`}
          id={TOP_ID}
          tabIndex="-1"
          ref={this.topRef}
        >
          <SkipNav to="#main" />
          <SRAnnouncements />
          <Header />
          <main role="main" id="main" tabIndex="-1">
            <Switch>
              <Route exact path="/" component={Home} />} />
              <Route path="/results" component={Results} />
              <Route path="/details/:frid" component={Details} />
              <Route
                path="/content/:sectionID/:subSectionID?"
                component={Content}
              />
              />
              <Route path="/error" component={Error} />
              <Route component={NoMatch} />
            </Switch>
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = { setSRMessage };

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
