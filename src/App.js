import React, { Component } from "react";
import { Route } from "react-router-dom";
import "styled-components/macro";
import tw from "tailwind.macro";
import Banner from "./Banner";
import Nav from "./Nav";
import Home from "./Home";
import Results from "./Results";

class App extends Component {
  render() {
    return (
      <div css={tw`font-sans text-gray-900 leading-normal overflow-hidden`}>
        <Banner />
        <Nav />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/results" render={() => <Results />} />
      </div>
    );
  }
}

export default App;
