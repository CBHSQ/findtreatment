import React, { Component } from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";

// use tailwind classes the styled way
const Header = styled.header`
  ${tw`bg-black min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

class App extends Component {
  render() {
    // or inline via fancy css prop
    return (
      <div css={tw`text-center`}>
        <Header>
          <p css={tw`text-blue-light`}>
            Using <code>tailwind</code> and <code>styled-components</code>{" "}
            together.
          </p>
        </Header>
      </div>
    );
  }
}

export default App;
