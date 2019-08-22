import React, { Component } from 'react';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import withSizes from 'react-sizes';
import { Helmet } from 'react-helmet';

import content from '../utils/content';
import { SITE_TITLE } from '../utils/constants';

import ScreenContext from './ScreenContext';
import Header from './Header';
import Home from './Home';
import Results from './Results';
import Details from './Details';
import Content from './Content';
import NoMatch from './NoMatch';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  body {
    ${tw`font-sans text-gray-darkest leading-normal`}
  }
`;

class App extends Component {
  render() {
    return (
      <ScreenContext.Provider value={this.props.isDesktop}>
        <Helmet
          titleTemplate={`%s | ${SITE_TITLE}`}
          defaultTitle={SITE_TITLE}
        />
        <GlobalStyle />
        <Header />
        <main role="main">
          <Switch>
            <Route exact path="/" render={() => <Home content={content()} />} />
            <Route path="/results" component={Results} />
            <Route path="/details/:frid" component={Details} />
            <Route
              path="/content/:pageId"
              render={() => <Content content={content()} />}
            />
            <Route component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </ScreenContext.Provider>
    );
  }
}

App.propTypes = {
  isDesktop: PropTypes.bool.isRequired
};

const mapSizesToProps = sizes => ({
  isDesktop: withSizes.isDesktop(sizes)
});

export default withSizes(mapSizesToProps)(App);
