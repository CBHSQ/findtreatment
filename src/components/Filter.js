import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "styled-components/macro";
import tw from "tailwind.macro";

class Filter extends Component {
  state = {
    query: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateLocations(this.state.query);
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div css={tw`w-full mb-6`}>
          <label
            css={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
            htmlFor="search-zip"
          >
            Location
          </label>
          <input
            css={tw`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            id="search-zip"
            type="text"
            placeholder="City, state, or postal code"
            name="query"
            value={this.state.query || this.props.query}
            onChange={this.handleInputChange}
          />
        </div>
        <div css={tw`w-full mb-6`}>
          <label
            css={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
            htmlFor="search-type"
          >
            Service type
          </label>
          <div css={tw`relative`}>
            <select
              css={tw`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              id="search-type"
            >
              <option>All facilities</option>
              <option>Substance use</option>
              <option>Mental health</option>
            </select>
            <div
              css={tw`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`}
            >
              <svg
                css={tw`fill-current h-4 w-4`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div css={tw`flex items-end w-full mb-6`}>
          <button
            css={tw`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded  leading-tight border border-blue-500`}
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(Filter);
