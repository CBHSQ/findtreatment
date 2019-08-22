import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues, submit } from 'redux-form';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faSlidersH
} from '@fortawesome/free-solid-svg-icons';

import { handleReceiveLanguages } from '../../actions/languages';
import { resetAdvancedFilters, resetAllFilters } from '../../actions/filters';
import * as filterOptions from '../../utils/filters';
import { LOCATION_WARNING } from '../../utils/warnings';

import { Button, Label, Location, Select } from '../Input';

const Row = styled.div`
  ${tw`w-full mb-6`}
`;

const RowFlex = styled.div`
  ${tw`flex flex-wrap -mx-2 mb-6`}
`;

const Form = styled.form`
  ${tw`bg-gray-200 rounded p-6 mb-6`}

  input, select, .geosuggest__input {
    ${tw`bg-white`}
  }
`;

export class FormFilters extends Component {
  componentDidMount() {
    const { languages, dispatch } = this.props;

    if (!languages.length > 0) {
      dispatch(handleReceiveLanguages());
    }
  }

  state = {
    isHidden: true,
    showLocationWarning: false
  };

  toggleShowLocationWarning = value => {
    this.setState({
      showLocationWarning: value
    });
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

  handleReset = () => {
    this.props.resetAllFilters();
  };

  render() {
    const {
      handleSubmit,
      languages,
      toggleFilters,
      toggleResults,
      filtersHidden,
      resultsHidden,
      hasResults,
      isDesktop
    } = this.props;
    const { isHidden, showLocationWarning } = this.state;

    return (
      <>
        <RowFlex css={tw`flex lg:hidden justify-between border-b pb-6`}>
          <div css={tw`px-2`}>
            <Button outline onClick={toggleFilters}>
              {filtersHidden ? 'Cancel' : 'Filter'}
            </Button>
          </div>
          {filtersHidden ? (
            <div css={tw`px-2`}>
              <Button primary onClick={handleSubmit}>
                Update providers
              </Button>
            </div>
          ) : (
            hasResults && (
              <Button onClick={toggleResults} outline>
                {resultsHidden ? 'List' : 'Map'}
              </Button>
            )
          )}
        </RowFlex>
        {(isDesktop || filtersHidden) && (
          <Form onSubmit={handleSubmit}>
            <div css={tw`hidden lg:flex justify-between flex-no-wrap mb-6`}>
              <div>
                <h2>
                  <FontAwesomeIcon
                    icon={faSlidersH}
                    css={tw`mr-1 text-gray-500`}
                    rotation={90}
                  />
                  Filters
                </h2>
                <p css={tw`text-xs text-gray-700 font-light mb-0`}>
                  Search for facilities that match your needs
                </p>
              </div>
              <div>
                <Button
                  link
                  className="reset-filters"
                  onClick={this.handleReset}
                  type="button"
                >
                  Reset
                </Button>
              </div>
            </div>
            <RowFlex>
              <div css={tw`w-full md:w-3/5 px-2 mb-6 md:mb-0`}>
                <Label value="Location">
                  <Field
                    component={Location}
                    name="location"
                    placeholder="City or zip code"
                    toggleShowWarning={this.toggleShowLocationWarning}
                  />
                  {showLocationWarning && (
                    <div css={tw`w-full mt-2 text-red-500 text-sm`}>
                      {LOCATION_WARNING}
                    </div>
                  )}
                </Label>
              </div>
              <div css={tw`w-full md:w-2/5 px-2`}>
                <Label value="Distance">
                  <Field
                    name="distance"
                    component={Select}
                    hideFirst={true}
                    options={filterOptions.distance}
                  />
                </Label>
              </div>
            </RowFlex>
            <Row>
              <Label
                value="Payment options"
                help={{
                  url: '/content/paying-for-treatment',
                  text: 'Not sure?'
                }}
              >
                <Field
                  name="payment"
                  plural="payment options"
                  component={Select}
                  options={filterOptions.payment}
                />
              </Label>
            </Row>
            <Row>
              <Label
                value="Type of treatment"
                help={{
                  url: '/content/treatment-options#types-of-treatment',
                  text: 'Not sure?'
                }}
              >
                <Field
                  name="type"
                  plural="types of treatment"
                  component={Select}
                  options={filterOptions.type}
                />
              </Label>
            </Row>
            {!this.state.isHidden && (
              <div className="filter-container">
                <Row>
                  <Label value="Ages accepted">
                    <Field
                      name="age"
                      plural="ages"
                      component={Select}
                      options={filterOptions.age}
                    />
                  </Label>
                </Row>
                <Row>
                  <Label value="Language">
                    <Field
                      name="language"
                      plural="languages"
                      component={Select}
                      options={languages}
                    />
                  </Label>
                </Row>
                <Row>
                  <Label as="span" value="Special programs" />
                  <Label value="Veterans" inline>
                    <Field
                      css={tw`mr-2 `}
                      type="checkbox"
                      name="VET"
                      component="input"
                      format={v => v === 'VET'}
                      normalize={v => (v ? 'VET' : '')}
                    />
                  </Label>
                  <Label
                    value="Lesbian, gay, bisexual, transgender (LGBT)"
                    inline
                  >
                    <Field
                      css={tw`mr-2`}
                      type="checkbox"
                      name="GL"
                      component="input"
                      format={v => v === 'GL'}
                      normalize={v => (v ? 'GL' : '')}
                    />
                  </Label>
                </Row>
                <Row>
                  <Label value="Type of medication-assisted treatment (MAT)">
                    <Field
                      name="mat"
                      plural="treatments"
                      component={Select}
                      options={filterOptions.mat}
                    />
                    <Link
                      to="/content/treatment-options#medications-used-in-treatment"
                      css={tw`mb-2 text-sm`}
                    >
                      What are the differences between these medications?
                    </Link>
                  </Label>
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
            {!isDesktop && (
              <Row>
                <Button primary css={tw`w-full`} type="submit">
                  Update providers
                </Button>
              </Row>
            )}
            <Row css={tw`mb-0`}>
              <p css={tw`text-sm text-gray-700 mb-0`}>
                Too many or too few results? Add or remove search filters
                related to the treatment you’re looking for.
              </p>
            </Row>
          </Form>
        )}
      </>
    );
  }
}

FormFilters.propTypes = {
  languages: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  filtersHidden: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  hasResults: PropTypes.bool.isRequired,
  initialValues: PropTypes.object.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  resetAdvancedFilters: PropTypes.func.isRequired,
  resetAllFilters: PropTypes.func.isRequired,
  resultsHidden: PropTypes.bool.isRequired,
  toggleFilters: PropTypes.func.isRequired,
  toggleResults: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { languages } = state;
  const { loading, data } = languages;
  const values =
    getFormValues('filters')(state) ||
    getFormValues('homepage')(state) ||
    state.form.filters.initialValues;

  return {
    initialValues: {
      ...values
    },
    loading,
    languages: data
  };
};

const mapDispatchToProps = dispatch => ({
  resetAdvancedFilters() {
    dispatch(resetAdvancedFilters());
  },

  resetAllFilters() {
    dispatch(resetAllFilters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'filters',
    enableReinitialize: true,
    destroyOnUnmount: false,
    onChange: (values, dispatch, props, previousValues) => {
      const { isDesktop, loading } = props;

      if (!isDesktop || loading || !values.location.latLng) {
        return;
      }

      dispatch(submit('filters'));
    }
  })(FormFilters)
);
