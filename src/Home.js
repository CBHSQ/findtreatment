import React, { Component } from "react";
import "styled-components/macro";
import tw from "tailwind.macro";
import Search from "./Search";

class Home extends Component {
  render() {
    return (
      <>
        <div className="container" css={tw`mx-auto px-6 text-center mb-10`}>
          <h2 css={tw`text-5xl`}>Find help near you</h2>
          <span>
            Quickly find providers in your area based on your specific needs
          </span>
        </div>
        <Search />
        <div css={tw`bg-gray-200`}>
          <div className="container" css={tw`mx-auto p-6 lg:p-12`}>
            <div css={tw`flex flex-wrap -mx-6`}>
              <div css={tw`flex w-full md:w-1/3 px-6 mb-6 md:mb-0 `}>
                <div css={tw`bg-white rounded p-6`}>
                  <h3 css={tw`text-xl mb-4`}>
                    Learn about substance abuse treatment
                  </h3>
                  <p>
                    SAMHSA aims to answer questions and find the best ways to
                    prevent, diagnose, or substance abuse, addiction, and mental
                    health problems.
                  </p>
                </div>
              </div>
              <div css={tw`flex w-full md:w-1/3 px-6 mb-6 md:mb-0 `}>
                <div css={tw`bg-white rounded p-6`}>
                  <h3 css={tw`text-xl mb-4`}>Types of treatment</h3>
                  <p>
                    SAMHSA aims to answer questions and find the best ways to
                    prevent, diagnose, or substance abuse, addiction, and mental
                    health problems.
                  </p>
                </div>
              </div>
              <div css={tw`flex w-full md:w-1/3 px-6 mb-6 md:mb-0 `}>
                <div css={tw`bg-white rounded p-6`}>
                  <h3 css={tw`text-xl mb-4`}>Risks and benefits</h3>
                  <p>
                    SAMHSA aims to answer questions and find the best ways to
                    prevent, diagnose, or substance abuse, addiction, and mental
                    health problems.
                  </p>
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
