import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues, reset, submit } from 'redux-form';
import { ChasingDots } from 'styled-spinkit';

import * as filterOptions from '../../utils/filters';
import { DEFAULT_DISTANCE } from '../../utils/constants';

import { Button, Label, Location, InputGroup, Select } from '../Input';

const Row = styled.div`
  ${tw`w-full mb-4 px-4`}
`;

const RowWrapper = styled.div`
  ${tw`border-b border-gray-light pt-4`}
`;

const SubmitButton = ({
  loading,
  location,
  recordCount,
  toggleFilters,
  className
}) => (
  <RowWrapper className={className}>
    <Row>
      <Button
        primary
        disabled={!(location || {}).latLng}
        css={tw`w-full text-xl`}
        onClick={(location || {}).latLng && toggleFilters}
      >
        Show{' '}
        {loading ? (
          <ChasingDots size={16} css={tw`mx-1 my-0`} color="#fff" />
        ) : (
          recordCount
        )}{' '}
        results
      </Button>
    </Row>
  </RowWrapper>
);

export class FormFilters extends Component {
  render() {
    const { handleSubmit, resetForm } = this.props;

    return (
      <div css={tw`bg-teal-lighter rounded shadow border border-gray-light`}>
        <div css={tw`p-4 shadow hidden lg:block`}>
          <h2 css={tw`text-2xl font-heading font-bold`}>
            Refine search results
          </h2>
          <Button link onClick={resetForm} className="reset-form">
            Clear all
          </Button>
        </div>
        <form onSubmit={handleSubmit}>
          <SubmitButton {...this.props} css={tw`lg:hidden`} />
          <RowWrapper>
            <Row>
              <Label labelText="Location">
                <Field
                  css={tw`bg-gray-lightest border py-3 px-4`}
                  component={Location}
                  name="location"
                  placeholder="City or zip code"
                />
              </Label>
            </Row>
            <Row>
              <Label labelText="Distance">
                <Field
                  name="distance"
                  component={Select}
                  options={filterOptions.distance}
                />
              </Label>
            </Row>
          </RowWrapper>
          <RowWrapper>
            <Row>
              <InputGroup
                legend="Treatment type"
                name="type"
                options={filterOptions.type}
                visible={4}
                help={{
                  text: 'Details about treatment types',
                  url: '/content/treatment-options/types-of-treatment'
                }}
              />
            </Row>
          </RowWrapper>
          <RowWrapper>
            <Row>
              <InputGroup
                legend="Payment options"
                name="payment"
                options={filterOptions.payment}
                visible={4}
                help={{
                  text: 'Not sure how to pay?',
                  url:
                    '/content/paying-for-treatment/understanding-the-cost-of-treatment'
                }}
              />
            </Row>
          </RowWrapper>
          <RowWrapper>
            <Row>
              <InputGroup
                legend="Age"
                name="ages"
                options={filterOptions.age}
              />
            </Row>
          </RowWrapper>
          <RowWrapper>
            <Row>
              <Label labelText="Other languages spoken">
                <Field
                  name="language"
                  hideFirst
                  component={Select}
                  options={filterOptions.languages}
                />
              </Label>
            </Row>
          </RowWrapper>
          <RowWrapper>
            <Row>
              <InputGroup
                legend="Special programs"
                name="special"
                options={filterOptions.special}
                type="checkbox"
              />
            </Row>
          </RowWrapper>
          <RowWrapper>
            <Row>
              <InputGroup
                legend="Medication-assisted treatment (MAT)"
                name="mat"
                options={filterOptions.mat}
                help={{
                  text: 'Details about FDA-approved medications',
                  url:
                    '/content/treatment-options/medications-used-in-treatment'
                }}
              />
            </Row>
          </RowWrapper>
          <SubmitButton {...this.props} css={tw`lg:hidden`} />
        </form>
      </div>
    );
  }
}

FormFilters.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  location: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  recordCount: PropTypes.number,
  resetForm: PropTypes.func.isRequired,
  toggleFilters: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { facilities } = state;
  const values = getFormValues('filters')(state);

  return {
    initialValues: {
      distance: DEFAULT_DISTANCE,
      location: { address: '' }
    },
    location: (values || {}).location,
    loading: facilities.loading
  };
};

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(reset('filters'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'filters',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    onChange: (values, dispatch, props, previousValues) => {
      dispatch(submit('filters'));
    }
  })(FormFilters)
);
