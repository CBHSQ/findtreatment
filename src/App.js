import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Home from "./Home";
import Results from "./Results";

const Wrapper = styled.header`
  ${tw`min-h-screen flex flex-col items-center justify-center`};
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <h1 css={tw`font-sans text-xl text-gray-800 text-center`}>
          TreatmentLocator.gov
        </h1>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/results" render={() => <Results />} />
      </Wrapper>
    );
  }
}

export default App;
