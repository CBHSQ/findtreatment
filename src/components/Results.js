import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "styled-components/macro";
import tw from "tailwind.macro";
import * as API from "../utils/api";
import Card from "./Card";
import Filter from "./Filter";

class Results extends Component {
  state = {
    locations: []
  };

  componentDidMount() {
    this.updateLocations(this.props.location.state.query);
  }

  updateLocations = query => {
    API.search(this.props.location.state.query).then(locations => {
      this.setState({
        locations
      });
    });
  };

  render() {
    const { locations } = this.state;
    return (
      <div className="container">
        <h1 css={tw`mb-6`}>
          Results{" "}
          <span css={tw`text-lg text-gray-600 font-light`}>
            Treatment facilities near you
          </span>
        </h1>

        <div css={tw`flex -mx-6`}>
          <div css={tw`w-3/5 px-6`}>
            <ul css={tw``}>
              {locations.length > 0 &&
                locations.map(result => (
                  <Card key={result.frid} location={result} />
                ))}
            </ul>
          </div>
          <div css={tw`w-2/5 px-6`}>
            <h2 css={tw`mb-6`}>Filters</h2>
            <Filter
              query={this.props.location.state.query}
              updateLocations={this.updateLocations}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Results);
