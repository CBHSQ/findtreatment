import React, { Component } from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import withSizes from 'react-sizes';
import { Helmet } from 'react-helmet';

import { theme } from '../tailwind.js';

import ScreenContext from './ScreenContext';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Home from './Home';
import Results from './Results';
import Details from './Details';
import Content from './Content';
import NoMatch from './NoMatch';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <ScreenContext.Provider value={this.props}>
        <Helmet
          titleTemplate={`%s | ${process.env.REACT_APP_SITE_TITLE}`}
          defaultTitle={process.env.REACT_APP_SITE_TITLE}
        />
        <GlobalStyle />
        <div id="top" css={tw`overflow-hidden`}>
          <Header />
          <main role="main">
            <Switch>
              <Route exact path="/" component={Home} />} />
              <Route path="/results" component={Results} />
              <Route path="/details/:frid" component={Details} />
              <Route
                path="/content/:sectionID/:subSectionID?"
                component={Content}
              />
              />
              <Route component={NoMatch} />
            </Switch>
          </main>
          <div className="container" css={tw`mb-4 sm:hidden`}>
            <a href="#top" aria-label="Return to top" css={tw`text-blue`}>
              Return to top
            </a>
          </div>
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

export default withSizes(mapSizesToProps)(App);
