import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import * as filterOptions from '../../utils/filters';
import { Location, Select } from '../Input';
import { resetAdvancedFilters } from '../../actions/filters';

const Row = styled.div`
  ${tw`w-full mb-6`}
`;

const RowFlex = styled.div`
  ${tw`flex flex-wrap -mx-3 mb-6`}
`;

export class Filters extends Component {
  state = {
    isHidden: true
  };

  toggleHidden = () => {
    this.setState(
      {
        isHidden: !this.state.isHidden
      },
      () => {
        if (this.state.isHidden) {
          this.props.resetAdvancedFilters();
        }
      }
    );
  };

  render() {
    const { handleSubmit, data } = this.props;
    const { isHidden } = this.state;

    return (
      <form onSubmit={handleSubmit} css={tw`mb-6`}>
        <RowFlex>
          <div css={tw`w-full md:w-2/3 px-3 mb-6 md:mb-0`}>
            <Field
              label="Location"
              component={Location}
              name="location"
              placeholder="City, state, or zip code"
              format={v => (v ? v : '')}
            />
          </div>
          <div css={tw`w-full md:w-1/3 px-3`}>
            <Field
              name="distance"
              label="Distance"
              component={Select}
              hideFirst={true}
              options={filterOptions.distance}
            />
          </div>
        </RowFlex>
        <Row>
          <Field
            name="payment"
            label="Payment options"
            plural="payment options"
            component={Select}
            options={filterOptions.payment}
          />
        </Row>
        <Row>
          <Field
            name="type"
            label="Type of care"
            plural="types of care"
            component={Select}
            options={filterOptions.type}
          />
        </Row>
        <RowFlex>
          <div css={tw`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
            <Field
              name="age"
              label="Age"
              plural="ages"
              component={Select}
              options={filterOptions.age}
            />
          </div>
          <div css={tw`w-full md:w-1/2 px-3`}>
            <Field
              name="gender"
              label="Gender"
              plural="genders"
              component={Select}
              options={filterOptions.gender}
            />
          </div>
        </RowFlex>
        {!this.state.isHidden && (
          <div className="filter-container">
            <Row>
              <Field
                name="language"
                label="Language"
                plural="languages"
                component={Select}
                options={data}
              />
            </Row>
            <Row>
              <span
                css={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
              >
                Special programs offered
              </span>
              <label css={tw`block`}>
                <Field
                  css={tw`mr-2 leading-tight`}
                  type="checkbox"
                  name="VET"
                  component="input"
                  format={v => v === 'VET'}
                  normalize={v => (v ? 'VET' : '')}
                />
                <span css={tw`text-sm`}>Veterans</span>
              </label>
              <label css={tw`block`}>
                <Field
                  css={tw`mr-2 leading-tight`}
                  type="checkbox"
                  name="GL"
                  component="input"
                  format={v => v === 'GL'}
                  normalize={v => (v ? 'GL' : '')}
                />
                <span css={tw`text-sm`}>
                  Lesbian, gay, bisexual, transgender (LGBT)
                </span>
              </label>
            </Row>
            <Row>
              <Field
                name="mat"
                label="Opioid medication-assisted treatment"
                plural="treatments"
                component={Select}
                options={filterOptions.mat}
              />
            </Row>
          </div>
        )}
        <button
          className="filter-link"
          css={tw`mb-6`}
          onClick={this.toggleHidden}
          type="button"
        >
          {isHidden ? 'More' : 'Less'} filters
          <FontAwesomeIcon
            icon={isHidden ? faAngleDown : faAngleUp}
            css={tw`text-blue-500 ml-1`}
          />
        </button>
        <Row>
          <button
            css={tw`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded leading-tight border border-blue-500`}
            type="submit"
          >
            Update providers
          </button>
        </Row>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { languages } = state;
  const { loading, data } = languages;

  return {
    initialValues: {
      ...getFormValues('homepage')(state),
      distance: 16093.4
    },
    loading,
    data
  };
};

const mapDispatchToProps = dispatch => ({
  resetAdvancedFilters() {
    dispatch(resetAdvancedFilters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'filters',
    destroyOnUnmount: false
  })(Filters)
);
