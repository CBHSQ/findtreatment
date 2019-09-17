import React, { Component } from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';

import { DEFAULT_DISTANCE } from '../../utils/constants';

import { Button, Label, Location } from '../Input';

export class FormHomepage extends Component {
  handleSubmit = submitEvent => {
    const { handleSubmit, location } = this.props;

    if (!(location || {}).latLng) {
      return submitEvent.preventDefault();
    }

    handleSubmit(submitEvent);
  };

  render() {
    const { location } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <Label css={tw`mb-8`} large>
          <span>Find a treatment facility near you</span>
          <Field
            css={tw`md:mt-6 md:w-full md:shadow-md rounded p-4 border border-gray-light`}
            component={Location}
            name="location"
            placeholder="City or zip code"
            innerRef={this.props.innerRef}
          />
        </Label>

        <Button
          primary
          disabled={!(location || {}).latLng}
          css={tw`w-full md:w-auto md:inline-block md:px-16 text-2xl md:text-lg `}
          type="submit"
        >
          Search
        </Button>
      </form>
    );
  }
}

FormHomepage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  location: PropTypes.object
};

const mapStateToProps = state => {
  const values = getFormValues('filters')(state);

  return {
    initialValues: {
      distance: DEFAULT_DISTANCE,
      location: { address: '' }
    },
    location: (values || {}).location
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: 'filters',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(FormHomepage)
);
