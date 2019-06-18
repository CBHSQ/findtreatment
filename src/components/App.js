import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import HelpLine from './HelpLine';
import Banner from './Banner';
import Nav from './Nav';
import Home from './Home';
import Results from './Results';
import Details from './Details';
import Footer from './Footer';

class App extends Component {
  state = {
    query: {
      location: '',
      typeFacility: 'All',
      setting: '',
      payment: '',
      age: '',
      type: ''
    }
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      query: {
        ...this.state.query,
        [name]: value
      }
    });
  };

  render() {
    return (
      <div css={tw`font-sans text-gray-900 leading-normal overflow-hidden`}>
        <Banner />
        <HelpLine />
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                query={this.state.query}
                handleInputChange={this.handleInputChange}
              />
            )}
          />
          <Route
            path="/results"
            render={props => (
              <Results
                query={this.state.query}
                handleInputChange={this.handleInputChange}
              />
            )}
          />
          <Route path="/details/:providerId" component={Details} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
