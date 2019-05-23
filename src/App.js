import React, { Component } from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

const Header = styled.header`
  ${tw`min-h-screen flex flex-col items-center justify-center`};
`;

class App extends Component {
  render() {
    return (
      <Header>
        <h1 css={tw`font-sans text-xl text-gray-800 text-center`}>
          TreatmentLocator.gov
        </h1>
      </Header>
    );
  }
}

export default App;
