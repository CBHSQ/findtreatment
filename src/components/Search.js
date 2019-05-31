import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "styled-components/macro";
import tw from "tailwind.macro";
import { Select } from "./Input";

class Search extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: "/results"
    });
  };

  render() {
    return (
      <form
        className="container"
        css={tw`max-w-5xl mx-auto mb-12`}
        onSubmit={this.handleSubmit}
      >
        <div css={tw`flex flex-wrap -mx-3 mb-2`}>
          <div css={tw`w-full md:w-1/5 px-3 mb-6 md:mb-0`}>
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
              name="location"
              value={this.props.query.location}
              onChange={this.props.handleInputChange}
            />
          </div>
          <div css={tw`w-full md:w-1/5 px-3 mb-6 md:mb-0`}>
            <Select
              label="Service type"
              name="typeFacility"
              value={this.props.query.typeFacility}
              onChange={this.props.handleInputChange}
              options={[
                { name: "All providers", value: "" },
                { name: "Substance use", value: "SA" },
                { name: "Mental health", value: "MH" }
              ]}
            />
          </div>
          <div css={tw`w-full md:w-1/5 px-3 mb-6 md:mb-0`}>
            <Select
              label="Setting"
              name="setting"
              value={this.props.query.location}
              onChange={this.props.handleInputChange}
              options={[
                { name: "All settings", value: "" },
                { name: "Hospital inpatient", value: "" },
                { name: "Outpatient", value: "" },
                { name: "Residential", value: "" }
              ]}
            />
          </div>
          <div css={tw`w-full md:w-1/5 px-3 mb-6 md:mb-0`}>
            <Select
              label="Payment"
              name="payment"
              value={this.props.query.payment}
              onChange={this.props.handleInputChange}
              options={[
                { name: "All payments", value: "" },
                { name: "IHS/Tribal/Urban funds", value: "" },
                { name: "Medicare", value: "" },
                { name: "Medicaid", value: "" },
                { name: "Military insurance", value: "" },
                { name: "No payment accepted", value: "" },
                { name: "Private health insurance", value: "" },
                { name: "Cash or self-payment", value: "" },
                { name: "State-financed health insurance", value: "" }
              ]}
            />
          </div>
          <div css={tw`flex items-end w-full md:w-1/5 px-3 mb-6 md:mb-0`}>
            <button
              css={tw`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded  leading-tight border border-blue-500`}
              type="submit"
            >
              Find treatment
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Search);
