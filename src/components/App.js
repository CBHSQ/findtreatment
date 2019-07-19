import React from 'react';
import tw from 'tailwind.macro';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Results from './Results';
import Details from './Details';
import Content from './Content';
import NoMatch from './NoMatch';
import Footer from './Footer';

const StyledApp = tw.div`font-sans text-gray-900 leading-normal`;

const App = () => (
  <StyledApp>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/results" component={Results} />
      <Route path="/details" component={Details} />
      <Route path="/content/:pageId" component={Content} />
      <Route component={NoMatch} />
    </Switch>
    <Footer />
  </StyledApp>
);

export default App;
