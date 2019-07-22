import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import withSizes from 'react-sizes';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { handleReceiveLanguages } from '../../actions/languages';
import { resetAdvancedFilters, resetAllFilters } from '../../actions/filters';
import { handleReceiveFacilities } from '../../actions/facilities';
import * as filterOptions from '../../utils/filters';
import { Button, Location, Select } from '../Input';

const Row = styled.div`
  ${tw`w-full mb-6`}
`;

const RowFlex = styled.div`
  ${tw`flex flex-wrap -mx-3 mb-6`}
`;

export class FormFilters extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleReceiveLanguages());
  }

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

  handleReset = () => {
    const { resetAllFilters, initialValues, location } = this.props;

    resetAllFilters({
      distance: initialValues.distance,
      location
    });
  };

  render() {
    const {
      handleSubmit,
      data,
      isDesktop,
      toggleFilters,
      toggleResults,
      filtersHidden,
      resultsHidden,
      hasResults
    } = this.props;
    const { isHidden } = this.state;

    return (
      <>
        <RowFlex css={tw`flex lg:hidden justify-between border-b pb-6`}>
          <div css={tw`px-3`}>
            <Button outline onClick={toggleFilters}>
              {filtersHidden ? 'Cancel' : 'Filter'}
            </Button>
          </div>
          {filtersHidden ? (
            <div css={tw`px-3`}>
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
          <form onSubmit={handleSubmit} css={tw`mb-6`}>
            <RowFlex css={tw`hidden lg:flex justify-between`}>
              <div css={tw`px-3`}>
                <h2>Filters</h2>
                <p css={tw`text-sm text-gray-600 font-light mb-0`}>
                  Search for facilities that match your needs.
                </p>
              </div>
              <div css={tw`px-3`}>
                <Button
                  outline
                  className="reset-filters"
                  css={tw`px-2 py-1 mt-1`}
                  onClick={this.handleReset}
                  type="button"
                >
                  Reset
                </Button>
              </div>
            </RowFlex>
            <RowFlex>
              <div css={tw`w-full md:w-2/3 px-3 mb-6 md:mb-0`}>
                <Field
                  label="Location"
                  component={Location}
                  name="location"
                  placeholder="City or zip code"
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
                helpURL="/content/paying-for-treatment"
                helpText="Not sure?"
              />
            </Row>
            <Row>
              <Field
                name="type"
                label="Type of care"
                plural="types of care"
                component={Select}
                options={filterOptions.type}
                helpURL="/content/treatment-options#types-of-treatment"
                helpText="Not sure?"
              />
            </Row>
            {!this.state.isHidden && (
              <div className="filter-container">
                <Row>
                  <Field
                    name="age"
                    label="Ages accepted"
                    plural="ages"
                    component={Select}
                    options={filterOptions.age}
                  />
                </Row>
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
                    Special programs
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
                    label="Type of medication-assisted treatment (MAT)"
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
              <Button primary css={tw`w-full`} type="submit">
                Update providers
              </Button>
            </Row>
            <Row>
              <p css={tw`text-sm text-gray-700`}>
                Too many or too few results? Add or remove search filters
                related to the treatment you’re looking for.
              </p>
            </Row>
          </form>
        )}
      </>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  isDesktop: width > 1024
});

const mapStateToProps = state => {
  const { languages } = state;
  const { loading, data } = languages;
  const locationValue =
    getFormValues('homepage')(state) || getFormValues('filters')(state);

  return {
    initialValues: {
      ...locationValue
    },
    location: locationValue && locationValue.location,
    loading,
    data
  };
};

const mapDispatchToProps = dispatch => ({
  resetAdvancedFilters() {
    dispatch(resetAdvancedFilters());
  },

  resetAllFilters(query) {
    dispatch(resetAllFilters());
    dispatch(handleReceiveFacilities(query));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'filters',
    enableReinitialize: true,
    destroyOnUnmount: false
  })(withSizes(mapSizesToProps)(FormFilters))
);
