import React, { Component } from "react";
import { Link } from "react-router-dom";
import "styled-components/macro";
import tw from "tailwind.macro";

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
    return (
      <div css={tw`border-b mb-6`}>
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

          <div
            className={this.state.isHidden ? "hidden lg:block" : "block"}
            css={tw`w-full flex-grow lg:flex lg:items-center lg:w-auto`}
          >
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
                Recovery Resources
              </a>
              <a
                href="#responsive-header"
                css={tw`block mt-4 lg:inline-block lg:mt-0`}
              >
                About Us
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
