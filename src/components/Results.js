import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "styled-components/macro";
import tw from "tailwind.macro";
import * as API from "../utils/api";
import NoResults from "./NoResults";
import Card from "./Card";
import Filter from "./Filter";

class Results extends Component {
  state = {
    locations: []
  };

  componentDidMount() {
    this.updateLocations(this.props.query);
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    if (this.props.query !== prevProps.query) {
      this.updateLocations(this.props.query);
    }
  }

  updateLocations = query => {
    API.getAll(query).then(locations => {
      this.setState({
        locations: locations || []
      });
    });
  };

  render() {
    const { locations } = this.state;
    return (
      <div className="container">
        <div css={tw`flex justify-between items-center mb-6`}>
          <h1>
            Results{" "}
            <span css={tw`text-lg text-gray-600 font-light`}>
              Treatment providers near you
            </span>
          </h1>
          {locations.length > 0 && (
            <span css={tw`text-gray-500`}>
              Showing 1-{locations.length} of {locations.length}
            </span>
          )}
        </div>
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full lg:w-3/5 px-6 mb-6 lg:mb-0`}>
            <ul css={tw``}>
              {locations.length > 0 ? (
                locations.map(result => (
                  <Card key={result.frid} location={result} />
                ))
              ) : (
                <NoResults />
              )}
            </ul>
          </div>
          <div css={tw`w-full lg:w-2/5 px-6`}>
            <h2 css={tw`mb-6`}>Filters</h2>
            <Filter
              query={this.props.query}
              handleInputChange={this.props.handleInputChange}
              updateLocations={this.updateLocations}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Results);
