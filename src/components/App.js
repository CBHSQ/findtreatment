import React, { Component } from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import withSizes from 'react-sizes';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { theme } from '../tailwind.js';
import { TOP_ID } from '../utils/constants';

import ScreenContext from './ScreenContext';
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
import { trackPage } from '../middleware/analytics.js';

class App extends Component {
  render() {
    return (
      <ScreenContext.Provider value={this.props}>
        <Helmet
          onChangeClientState={newState =>
            trackPage(window.location.pathname, newState.title)
          }
          titleTemplate={`%s | ${process.env.REACT_APP_SITE_TITLE}`}
          defaultTitle={process.env.REACT_APP_SITE_TITLE}
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
            content={`${process.env.REACT_APP_SITE_DOMAIN}/thumbnail.png`}
          />
          <meta
            property="og:site_name"
            content={process.env.REACT_APP_SITE_TITLE}
          />
        </Helmet>
        <GlobalStyle />
        <SkipNav skipToMain={this.skipToMain} />
        <div id={TOP_ID} css={tw`overflow-hidden`} tabIndex="-1">
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
      </ScreenContext.Provider>
    );
  }
}

App.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired
};

const mapSizesToProps = ({ width }) => ({
  isDesktop: width >= parseInt(theme.screens.lg, 10),
  isTablet: width >= parseInt(theme.screens.md, 10)
});

export default withRouter(withSizes(mapSizesToProps)(App));
