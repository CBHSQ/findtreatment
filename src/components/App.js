import React, { Component } from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import withSizes from 'react-sizes';

import { theme } from '../tailwind.js';
import { TOP_ID } from '../utils/constants';

import ScreenContext from './ScreenContext';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Home from './Home';
import Results from './Results';
import Details from './Details';
import Content from './Content';
import NoMatch from './NoMatch';
import Footer from './Footer';
import SRAnnouncements from './SRAnnouncements';
import AppHelmet from './AppHelmet';

class App extends Component {
  mainRef = React.createRef();

  render() {
    return (
      <ScreenContext.Provider value={this.props}>
        <AppHelmet focusTarget={this.mainRef} />
        <GlobalStyle />
        <SRAnnouncements />
        <div css={tw`overflow-hidden`}>
          <Header />
          <main id={TOP_ID} role="main" tabIndex="-1" ref={this.mainRef}>
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
