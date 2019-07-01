import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import Button from './Button';
import { Location } from '../Input';

class Homepage extends Component {
  handleSubmit = submitEvent => {
    if (!this.props.hasValidLocation) {
      return submitEvent.preventDefault();
    }

    this.props.handleSubmit(submitEvent);
  };

  render() {
    const { hasValidLocation } = this.props;

    return (
      <form
        css={tw`lg:max-w-3xl mx-auto mb-12 px-6`}
        onSubmit={this.handleSubmit}
      >
        <div css={tw`flex flex-wrap -mx-3 mb-2`}>
          <div css={tw`w-full lg:w-2/3 px-3 mb-6 lg:mb-0`}>
            <Field
              label="Location"
              component={Location}
              name="location"
              placeholder="City, state, or zip code"
            />
          </div>
          <div css={tw`flex items-end w-full lg:w-1/3 px-3 mb-6 lg:mb-0`}>
            <Button
              primary
              disable={!hasValidLocation}
              css={tw`w-full`}
              type="submit"
            >
              Find treatment
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const values = getFormValues('homepage')(state);
  const hasValidLocation = values && values.location;

  return {
    hasValidLocation
  };
};

export default reduxForm({
  form: 'homepage'
})(connect(mapStateToProps)(Homepage));
