import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues, submit } from 'redux-form';

import { handleReceiveLanguages } from '../../actions/languages';
import * as filterOptions from '../../utils/filters';

import { Label, Location, InputGroup, Select } from '../Input';

const Row = styled.div`
  ${tw`w-full mb-4 px-4`}
`;

const RowWrapper = styled.div`
  ${tw`border-b border-gray-light pt-4`}
`;

export class FormFilters extends Component {
  componentDidMount() {
    const { languages, dispatch } = this.props;

    if (!languages.length > 0) {
      dispatch(handleReceiveLanguages());
    }
  }

  render() {
    const { handleSubmit, languages } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <RowWrapper>
          <Row>
            <Label value="Location">
              <Field
                css={tw`bg-gray-lightest border py-3 px-4`}
                component={Location}
                name="location"
                placeholder="City or zip code"
              />
            </Label>
          </Row>
          <Row>
            <Label value="Distance">
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
            />
          </Row>
        </RowWrapper>
        <RowWrapper>
          <Row>
            <InputGroup legend="Age" name="ages" options={filterOptions.age} />
          </Row>
        </RowWrapper>
        <RowWrapper>
          <Row>
            <Label value="Other languages spoken">
              <Field
                name="language"
                hideFirst
                component={Select}
                options={languages}
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
            />
          </Row>
        </RowWrapper>
      </form>
    );
  }
}

FormFilters.propTypes = {
  initialValues: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  languages: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isDesktop: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { languages } = state;
  const { loading, data } = languages;
  const values =
    getFormValues('homepage')(state) ||
    getFormValues('filters')(state) ||
    state.form.filters.initialValues;

  return {
    initialValues: {
      ...values
    },
    location: values && values.location,
    loading,
    languages: data
  };
};

export default connect(mapStateToProps)(
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
