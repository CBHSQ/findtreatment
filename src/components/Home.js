import React, { Component } from "react";
import "styled-components/macro";
import tw from "tailwind.macro";
import Search from "./Search";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container" css={tw`mx-auto text-center mb-10`}>
          <h2 css={tw`text-5xl font-light`}>Find help near you</h2>
          <span>
            Quickly find providers in your area based on your specific needs
          </span>
        </div>
        <Search
          query={this.props.query}
          handleInputChange={this.props.handleInputChange}
        />
        <div css={tw`bg-gray-200`}>
          <div className="container" css={tw`mx-auto py-6 lg:py-12`}>
            <div css={tw`flex flex-wrap -mx-6`}>
              <div css={tw`flex w-full lg:w-1/3 px-6 mb-6 lg:mb-0 `}>
                <div css={tw`bg-white rounded p-6`}>
                  <h3 css={tw`text-xl mb-4`}>Getting started/h3>
                  <p css={tw`mb-6`}>
                    SAMHSA aims to answer questions and find the best ways to
                    prevent, diagnose, or substance abuse, addiction, and mental
                    health problems.
                  </p>
                  <button
                    css={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded  leading-tight border border-blue-500`}
                  >
                    Learn more
                  </button>
                </div>
              </div>
              <div css={tw`flex w-full lg:w-1/3 px-6 mb-6 lg:mb-0 `}>
                <div css={tw`bg-white rounded p-6`}>
                  <h3 css={tw`text-xl mb-4`}>Understanding treatment options</h3>
                  <p css={tw`mb-6`}>
                    SAMHSA aims to answer questions and find the best ways to
                    prevent, diagnose, or substance abuse, addiction, and mental
                    health problems.
                  </p>
                  <button
                    css={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded  leading-tight border border-blue-500`}
                  >
                    Learn more
                  </button>
                </div>
              </div>
              <div css={tw`flex w-full lg:w-1/3 px-6 mb-6 lg:mb-0 `}>
                <div css={tw`bg-white rounded p-6`}>
                  <h3 css={tw`text-xl mb-4`}>What to look for in a provider</h3>
                  <p css={tw`mb-6`}>
                    SAMHSA aims to answer questions and find the best ways to
                    prevent, diagnose, or substance abuse, addiction, and mental
                    health problems.
                  </p>
                  <button
                    css={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded  leading-tight border border-blue-500`}
                  >
                    Learn more
                  </button>
                </div>
                    <div css={tw`flex w-full lg:w-1/3 px-6 mb-6 lg:mb-0 `}>
                <div css={tw`bg-white rounded p-6`}>
                  <h3 css={tw`text-xl mb-4`}>Support for addiction</h3>
                  <p css={tw`mb-6`}>
                    SAMHSA aims to answer questions and find the best ways to
                    prevent, diagnose, or substance abuse, addiction, and mental
                    health problems.
                  </p>
                  <button
                    css={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded  leading-tight border border-blue-500`}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
