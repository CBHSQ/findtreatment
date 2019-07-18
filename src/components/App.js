import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import Header from './Header';
import Home from './Home';
import Results from './Results';
import Details from './Details';
import Page from './Page';
import NoMatch from './NoMatch';
import Footer from './Footer';

const StyledApp = styled.div`
  ${tw`font-sans text-gray-900 leading-normal`}
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/details" component={Details} />
        <Route path="/content/:pageId" component={Page} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </StyledApp>
  );
};

export default App;
