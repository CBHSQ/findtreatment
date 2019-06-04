import React, { Component } from "react";
import "styled-components/macro";
import tw from "tailwind.macro";
import Search from "./Search";

class Home extends Component {
  render() {
    const content = [
      {
        heading: "Support for addiction",
        body:
          "SAMHSA aims to answer questions and find the best ways to prevent, diagnose, or substance abuse, addiction, and mental health problems."
      },
      {
        heading: "Understanding treatment options",
        body:
          "SAMHSA aims to answer questions and find the best ways to prevent, diagnose, or substance abuse, addiction, and mental health problems."
      },
      {
        heading: "What to look for in a provider",
        body:
          "SAMHSA aims to answer questions and find the best ways to prevent, diagnose, or substance abuse, addiction, and mental health problems."
      },
      {
        heading: "Getting to recovery",
        body:
          "SAMHSA aims to answer questions and find the best ways to prevent, diagnose, or substance abuse, addiction, and mental health problems."
      }
    ];

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
          <div className="container" css={tw`mx-auto py-2 py-12`}>
            <div css={tw`mb-6 text-center`}>
              <h3 css={tw`text-4xl font-light text-gray-700`}>
                Getting started
              </h3>
            </div>
            <div css={tw`flex flex-wrap -mx-6`}>
              {content.map(card => (
                <div css={tw`flex w-full lg:w-1/4 px-2 mb-6 lg:mb-0 `}>
                  <div
                    css={tw`flex flex-col bg-white rounded p-6 text-gray-700`}
                  >
                    <h4 css={tw`text-xl mb-4`}>{card.heading}</h4>
                    <p css={tw`flex-auto  mb-6 text-sm`}>{card.body}</p>
                    <button
                      css={tw`text-blue-700 font-bold py-3 px-4 rounded leading-tight border border-blue-500`}
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
