import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { connect } from 'react-redux';
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
    const { handleSubmit, data } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div css={tw`flex flex-wrap -mx-3 mb-6`}>
          <div css={tw`w-full md:w-2/3 px-3 mb-6 md:mb-0`}>
            <Field
              label="Location"
              component={Location}
              name="location"
              placeholder="City, state, or zip code"
            />
          </div>
          <div css={tw`w-full md:w-1/3 px-3`}>
            <Field
              name="distance"
              label="Distance"
              hideFirst={true}
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
        </div>
        <div css={tw`w-full mb-6`}>
          <Field
            name="payment"
            label="Payment options"
            plural="payment options"
            component={Select}
            options={FilterOptions.payment}
          />
        </div>
        <div css={tw`w-full mb-6`}>
          <Field
            name="type"
            label="Type of care"
            plural="types of care"
            component={Select}
            options={FilterOptions.type}
          />
        </div>
        <div css={tw`flex flex-wrap -mx-3 mb-6`}>
          <div css={tw`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
            <Field
              name="age"
              label="Age"
              plural="ages"
              component={Select}
              options={FilterOptions.age}
            />
          </div>
          <div css={tw`w-full md:w-1/2 px-3`}>
            <Field
              name="gender"
              label="Gender"
              plural="genders"
              component={Select}
              options={FilterOptions.gender}
            />
          </div>
        </div>
        {!this.state.isHidden && (
          <div className="filter-container">
            <div css={tw`w-full mb-6`}>
              <Field
                name="language"
                label="Language"
                plural="languages"
                component={Select}
                options={data}
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

const mapStateToProps = ({ languages }) => {
  const { loading, data } = languages;

  return {
    loading,
    data
  };
};

export default reduxForm({
  form: 'search',
  initialValues: {
    type: 'BOTH',
    distance: 16093.4
  },
  destroyOnUnmount: false
})(connect(mapStateToProps)(SearchFilter));
