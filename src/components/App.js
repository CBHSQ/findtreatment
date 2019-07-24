import React from 'react';
import tw from 'tailwind.macro';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Results from './Results';
import Details from './Details';
import Content from './Content';
import NoMatch from './NoMatch';
import Footer from './Footer';

import topics from '../utils/topics';

const GlobalStyle = createGlobalStyle`
  body {
    ${tw`font-sans text-gray-900 leading-normal`}
  }
`;

const App = () => {
  console.log(topics());
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/details" component={Details} />
        <Route
          path="/content/:pageId"
          render={() => <Content topics={topics()} />}
        />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
