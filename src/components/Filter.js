import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Select } from './Input';

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
              { name: 'All providers', value: 'BOTH' },
              { name: 'Substance use', value: 'SA' },
              { name: 'Mental health', value: 'MH' },
              { name: "I'm not sure", value: 'BOTH' }
            ]}
          />
        </div>
        <div css={tw`w-full mb-6`}>
          <Select
            label="Setting"
            name="setting"
            value={this.props.query.setting}
            onChange={this.props.handleInputChange}
            options={[
              { name: 'All settings' },
              { name: 'Hospital inpatient' },
              { name: 'Outpatient' },
              { name: 'Residential' }
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
              { name: 'All payment types' },
              { name: 'No payment accepted (free treatment for all clients)' },
              { name: 'Cash or self-payment' },
              { name: 'Medicare' },
              { name: 'Medicaid' },
              { name: 'State-financed health insurance' },
              { name: 'Military insurance' },
              { name: 'Private health insurance' },
              { name: 'IHS/Tribal/Urban funds' },
              { name: "I'm not sure" }
            ]}
          />
        </div>
        {!this.state.isHidden && (
          <div className="filter-container">
            <div css={tw`w-full mb-6`}>
              <Select
                label="Type of care"
                name="type"
                value={this.props.query.type}
                onChange={this.props.handleInputChange}
                options={[
                  { name: 'All types' },
                  { name: 'Detoxification' },
                  { name: 'Substance use tretament' }
                ]}
              />
            </div>
            <div css={tw`w-full mb-6`}>
              <Select
                label="Age groups accepted"
                name="age"
                value={this.props.query.age}
                onChange={this.props.handleInputChange}
                options={[
                  { name: 'All age groups' },
                  { name: 'Adults' },
                  { name: 'Children/adolescents' },
                  { name: 'Young adults' }
                ]}
              />
            </div>
          </div>
        )}
        <button
          className="filter-link"
          css={tw`mb-6`}
          onClick={this.toggleHidden}
        >
          {this.state.isHidden ? 'More' : 'Less'} filters
          <FontAwesomeIcon
            icon={this.state.isHidden ? faAngleDown : faAngleUp}
            css={tw`text-blue-500 ml-1`}
          />
        </button>
      </>
    );
  }
}

export default Filter;
