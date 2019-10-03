import React, { Component } from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { withRouter, Route, Switch } from 'react-router-dom';
import withSizes from 'react-sizes';

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
import SRAnnouncements from './SRAnnouncements';
import AppHelmet from './AppHelmet';

class App extends Component {
  topRef = React.createRef();

  render() {
    return (
      <ScreenContext.Provider value={{ ...this.props, topRef: this.topRef }}>
        <AppHelmet focusTarget={this.topRef} />
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
