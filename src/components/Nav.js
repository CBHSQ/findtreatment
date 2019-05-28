import React from "react";
import { Link } from "react-router-dom";
import "styled-components/macro";
import tw from "tailwind.macro";

const Nav = () => {
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
            css={tw`flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400`}
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
        <div css={tw`w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div css={tw`text-sm lg:flex-grow`}>
            <a
              href="#responsive-header"
              css={tw`block mt-4 lg:inline-block lg:mt-0 mr-6`}
            >
              Getting Started
            </a>
            <a
              href="#responsive-header"
              css={tw`block mt-4 lg:inline-block lg:mt-0 mr-6`}
            >
              Resources
            </a>
            <a
              href="#responsive-header"
              css={tw`block mt-4 lg:inline-block lg:mt-0`}
            >
              Providers
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
