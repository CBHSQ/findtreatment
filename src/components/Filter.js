import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Location, Select } from './Input';

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
          <Location
            handleLocationChange={this.props.handleLocationChange}
            location={this.props.location}
          />
        </div>
        <div css={tw`w-full mb-6`}>
          <Select
            label="Service type"
            name="sType"
            value={this.props.query.sType}
            onChange={this.props.handleInputChange}
            options={[
              { name: 'All providers', value: 'BOTH' },
              { name: 'Substance use', value: 'SA' },
              { name: 'Mental health', value: 'MH' }
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
