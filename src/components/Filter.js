import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "styled-components/macro";
import tw from "tailwind.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Select } from "./Input";

class Filter extends Component {
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
      <>
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
            name="location"
            value={this.props.query.location}
            onChange={this.props.handleInputChange}
          />
        </div>
        <div css={tw`w-full mb-6`}>
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
        <div css={tw`w-full mb-6`}>
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
        <div css={tw`w-full mb-6`}>
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
        {!this.state.isHidden && (
          <>
            <div css={tw`w-full mb-6`}>
              <Select
                label="Type of care"
                name="type"
                value={this.props.query.payment}
                onChange={this.props.handleInputChange}
                options={[
                  { name: "All types", value: "" },
                  { name: "Detoxification", value: "" },
                  { name: "Substance use tretament", value: "" }
                ]}
              />
            </div>
            <div css={tw`w-full mb-6`}>
              <Select
                label="Age groups accepted"
                name="age"
                value={this.props.query.payment}
                onChange={this.props.handleInputChange}
                options={[
                  { name: "All age groups", value: "" },
                  { name: "Adults", value: "" },
                  { name: "Children/adolescents", value: "" },
                  { name: "Young adults", value: "" }
                ]}
              />
            </div>
          </>
        )}
        <button onClick={this.toggleHidden}>
          {this.state.isHidden ? "More" : "Less"} filters
          <FontAwesomeIcon
            icon={this.state.isHidden ? faAngleDown : faAngleUp}
            css={tw`text-blue-500 ml-1`}
          />
        </button>
      </>
    );
  }
}

export default withRouter(Filter);
