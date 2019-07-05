import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const StyledNav = styled.div`
  ${tw`border-b mb-6`}

  a {
    ${tw`text-gray-900 hover:text-gray-900`}
  }
`;

const MobileNav = styled.div`
  ${tw`w-full flex-grow lg:flex lg:items-center lg:w-auto`}

  ${({ isHidden }) => (isHidden ? tw`hidden lg:block` : tw`block`)}
`;

class Nav extends Component {
  state = {
    isHidden: true
  };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    const { isHidden } = this.state;

    return (
      <StyledNav>
        <nav
          className="container"
          css={tw`mx-auto py-6 flex items-center justify-between flex-wrap`}
        >
          <Link to="/" css={tw`font-semibold text-2xl tracking-tight`}>
            Treatment Finder
          </Link>
          <div css={tw`block lg:hidden`}>
            <button
              onClick={this.toggleHidden}
              css={tw`flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600`}
            >
              <svg
                css={tw`fill-current h-3 w-3`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <MobileNav isHidden={isHidden}>
            <div css={tw`text-sm lg:flex-grow`}>
              <a
                href="#responsive-header"
                css={tw`block mt-4 lg:inline-block lg:mt-0 mr-6`}
              >
                Locate treatment
              </a>
              <a
                href="#responsive-header"
                css={tw`block mt-4 lg:inline-block lg:mt-0 mr-6`}
              >
                What to expect
              </a>
              <a
                href="#responsive-header"
                css={tw`block mt-4 lg:inline-block lg:mt-0`}
              >
                About us
              </a>
            </div>
          </MobileNav>
        </nav>
      </StyledNav>
    );
  }
}

export default Nav;
