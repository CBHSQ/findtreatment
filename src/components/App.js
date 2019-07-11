import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { connect } from 'react-redux';
import { handleReceiveLanguages } from '../actions/languages';
import Header from './Header';
import Home from './Home';
import Results from './Results';
import Details from './Details';
import Page from './Page';
import NoMatch from './NoMatch';
import Footer from './Footer';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleReceiveLanguages());
  }

  render() {
    return (
      <div css={tw`font-sans text-gray-900 leading-normal overflow-hidden`}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/details" component={Details} />
          <Route path="/content/:pageId" component={Page} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
