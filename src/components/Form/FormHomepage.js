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
    const { dispatch, location } = this.props;

    if (location) {
      dispatch(reset('homepage'));
      dispatch(destroyFacilities());
    }
  }

  toggleShowWarning = value => {
    this.setState({
      showWarning: value
    });
  };

  handleSubmit = submitEvent => {
    if (!this.props.location.latLng) {
      return submitEvent.preventDefault();
    }

    this.props.handleSubmit(submitEvent);
  };

  render() {
    const { showWarning } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div css={tw`flex flex-wrap -mx-3`}>
          <div css={tw`w-full lg:w-2/3 px-3 mb-6 lg:mb-0`}>
            <Label value="Find help near you" lg>
              <Field
                component={Location}
                name="location"
                placeholder="City or zip code"
                toggleShowWarning={this.toggleShowWarning}
              />
            </Label>
          </div>
          <div css={tw`flex items-end w-full lg:w-1/3 px-3`}>
            <Button primary css={tw`w-full`} type="submit">
              Search
            </Button>
          </div>
          {showWarning && (
            <div
              css={tw`w-full px-3 my-2 text-red-500 text-sm order-first lg:order-last`}
            >
              {LOCATION_WARNING}
            </div>
          )}
        </div>
      </form>
    );
  }
}

FormHomepage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  location: PropTypes.object
};

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

export default connect(mapStateToProps)(
  reduxForm({
    form: 'homepage',
    destroyOnUnmount: false
  })(FormHomepage)
);
