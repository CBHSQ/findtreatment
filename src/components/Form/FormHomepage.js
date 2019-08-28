import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues, reset } from 'redux-form';
import 'styled-components/macro';
import tw from 'tailwind.macro';

import { destroyFacilities } from '../../actions/facilities';
import { LOCATION_WARNING } from '../../utils/warnings';

import { Button, Label, Location } from '../Input';

export class FormHomepage extends Component {
  state = { showWarning: false };

  componentDidMount() {
    const { clearValues, location } = this.props;

    if (location && location.latLng) {
      clearValues();
    }
  }

  toggleShowWarning = value => {
    this.setState({
      showWarning: value
    });
  };

  handleSubmit = submitEvent => {
    const { handleSubmit, location } = this.props;

    if (!location.latLng) {
      return submitEvent.preventDefault();
    }

    handleSubmit(submitEvent);
  };

  render() {
    const { showWarning } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Label value="Find a treatment facility near you" css={tw`mb-8`} large>
          <Field
            css={tw`md:mt-6 md:w-full md:shadow-md rounded`}
            component={Location}
            name="location"
            placeholder="City or zip code"
            toggleShowWarning={this.toggleShowWarning}
          />
        </Label>

        <Button
          primary
          css={tw`w-full md:w-auto md:inline-block md:px-16`}
          type="submit"
        >
          Search
        </Button>

        {showWarning && (
          <div
            css={tw`w-full px-3 my-2 text-red-500 text-sm order-first lg:order-last`}
          >
            {LOCATION_WARNING}
          </div>
        )}
      </form>
    );
  }
}

FormHomepage.propTypes = {
  clearValues: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  location: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  clearValues() {
    dispatch(reset('homepage'));
    dispatch(destroyFacilities());
  }
});

const mapStateToProps = state => {
  const initialValues = state.form.homepage.initialValues;
  const values = getFormValues('homepage')(state);

  return {
    initialValues: {
      ...initialValues
    },
    location: values && values.location
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'homepage',
    destroyOnUnmount: false
  })(FormHomepage)
);
