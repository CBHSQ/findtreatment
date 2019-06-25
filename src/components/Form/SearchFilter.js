import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Location, Select } from '../Input';
import * as FilterOptions from '../../utils/filters';

export class SearchFilter extends Component {
  state = {
    isHidden: true
  };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div css={tw`w-full mb-6`}>
          <Field
            label="Location"
            component={Location}
            name="location"
            placeholder="City, state, or zip code"
          />
        </div>
        <div css={tw`w-full mb-6`}>
          <Field
            name="distance"
            label="Distance"
            component={Select}
            options={[
              { value: 8046.72, label: '5 miles' },
              { value: 16093.4, label: '10 miles' },
              { value: 40233.6, label: '25 miles' },
              { value: 80467.2, label: '50 miles' },
              { value: 160934, label: '100 miles' }
            ]}
          />
        </div>
        <div css={tw`w-full mb-6`}>
          <Field
            name="type"
            label="Service type"
            component={Select}
            options={[
              { value: 'BOTH', label: 'All providers' },
              { value: 'SA', label: 'Substance use' },
              { value: 'MH', label: 'Mental health' }
            ]}
          />
        </div>
        {!this.state.isHidden && (
          <div className="filter-container">
            <div css={tw`w-full mb-6`}>
              <Field
                name="payment"
                label="Payment options"
                component={Select}
                options={FilterOptions.payment}
              />
            </div>
            <div css={tw`w-full mb-6`}>
              <Field
                name="age"
                label="Age"
                component={Select}
                options={FilterOptions.age}
              />
            </div>
            <div css={tw`w-full mb-6`}>
              <Field
                name="gender"
                label="Gender"
                component={Select}
                options={FilterOptions.gender}
              />
            </div>
          </div>
        )}
        <button
          className="filter-link"
          css={tw`mb-6`}
          onClick={this.toggleHidden}
          type="button"
        >
          {this.state.isHidden ? 'More' : 'Less'} filters
          <FontAwesomeIcon
            icon={this.state.isHidden ? faAngleDown : faAngleUp}
            css={tw`text-blue-500 ml-1`}
          />
        </button>
        <div css={tw`w-full mb-6`}>
          <button
            css={tw`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded leading-tight border border-blue-500`}
            type="submit"
          >
            Update providers
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'search',
  initialValues: {
    type: 'BOTH',
    distance: 16093.4
  },
  destroyOnUnmount: false
})(SearchFilter);
