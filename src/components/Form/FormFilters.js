import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues, submit } from 'redux-form';
import { Link } from 'react-router-dom';

import { handleReceiveLanguages } from '../../actions/languages';
import { resetAllFilters } from '../../actions/filters';
import { toggleAdvancedFilters } from '../../actions/ui';
import * as filterOptions from '../../utils/filters';
import { LOCATION_WARNING } from '../../utils/warnings';

import { Button, Label, Location, RadioGroup, Select } from '../Input';

const Row = styled.div`
  ${tw`w-full mb-4 px-4`}
`;

export class FormFilters extends Component {
  componentDidMount() {
    const { languages, dispatch } = this.props;

    if (!languages.length > 0) {
      dispatch(handleReceiveLanguages());
    }
  }

  state = {
    showLocationWarning: false
  };

  toggleShowLocationWarning = value => {
    this.setState({
      showLocationWarning: value
    });
  };

  toggleAdvancedFilters = () => {
    this.props.toggleAdvancedFilters();
  };

  handleReset = () => {
    this.props.resetAllFilters();
  };

  render() {
    const {
      className,
      advancedHidden,
      handleSubmit,
      languages,
      filtersHidden,
      isDesktop
    } = this.props;
    const { showLocationWarning } = this.state;

    return (
      <>
        {(isDesktop || filtersHidden) && (
          <form onSubmit={handleSubmit} className={className}>
            <div css={tw`border-b border-gray-lighter pt-4`}>
              <Row>
                <Label value="Location">
                  <Field
                    css={tw`bg-gray-lightest`}
                    component={Location}
                    name="location"
                    placeholder="City or zip code"
                    toggleShowWarning={this.toggleShowLocationWarning}
                  />
                  {showLocationWarning && (
                    <div css={tw`mt-2 text-red-500 text-sm`}>
                      {LOCATION_WARNING}
                    </div>
                  )}
                </Label>
              </Row>
              <Row>
                <Label value="Distance">
                  <Field
                    name="distance"
                    component={Select}
                    hideFirst={true}
                    options={filterOptions.distance}
                  />
                </Label>
              </Row>
            </div>
            <div css={tw`border-b border-gray-lighter pt-4`}>
              <Row>
                <RadioGroup
                  legend="Payment options"
                  name="payment"
                  options={filterOptions.payment}
                />
              </Row>
            </div>
            <div css={tw`border-b border-gray-lighter pt-4`}>
              <Row>
                <RadioGroup
                  legend="Type of treatment"
                  name="type"
                  options={filterOptions.type}
                />
              </Row>
            </div>
            {!advancedHidden && (
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
                      css={tw`mr-2`}
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
          </form>
        )}
      </>
    );
  }
}

FormFilters.propTypes = {
  advancedHidden: PropTypes.bool.isRequired,
  languages: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  filtersHidden: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  hasResults: PropTypes.bool.isRequired,
  initialValues: PropTypes.object.isRequired,
  isDesktop: PropTypes.bool.isRequired,
  toggleAdvancedFilters: PropTypes.func.isRequired,
  resetAllFilters: PropTypes.func.isRequired,
  resultsHidden: PropTypes.bool.isRequired,
  toggleFilters: PropTypes.func.isRequired,
  toggleResults: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { languages, ui } = state;
  const { loading, data } = languages;
  const { advancedHidden } = ui;
  const values =
    getFormValues('filters')(state) ||
    getFormValues('homepage')(state) ||
    state.form.filters.initialValues;

  return {
    advancedHidden,
    initialValues: {
      ...values
    },
    loading,
    languages: data
  };
};

const mapDispatchToProps = dispatch => ({
  toggleAdvancedFilters() {
    dispatch(toggleAdvancedFilters());
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
