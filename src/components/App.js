import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "styled-components/macro";
import tw from "tailwind.macro";
import Banner from "./Banner";
import Nav from "./Nav";
import Home from "./Home";
import Results from "./Results";
import Details from "./Details";

class App extends Component {
  render() {
    return (
      <div css={tw`font-sans text-gray-900 leading-normal overflow-hidden`}>
        <Banner />
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home updateQuery={this.updateQuery} />}
          />
          <Route path="/results" component={Results} />
          <Route path="/details/:providerId" component={Details} />
        </Switch>
      </div>
    );
  }
}

export default App;
