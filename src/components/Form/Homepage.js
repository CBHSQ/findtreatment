import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues, reset } from 'redux-form';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { Button, Location } from '../Input';
import { destroyFacilities } from '../../actions/facilities';

const Form = styled.form`
  ${tw`mb-10`}
`;

class Homepage extends Component {
  componentDidMount() {
    const { dispatch, location } = this.props;

    if (location) {
      dispatch(reset('homepage'));
      dispatch(destroyFacilities());
    }
  }

  handleSubmit = submitEvent => {
    if (!this.props.location) {
      return submitEvent.preventDefault();
    }

    this.props.handleSubmit(submitEvent);
  };

  render() {
    const { location } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <div css={tw`flex flex-wrap -mx-3`}>
          <div css={tw`w-full lg:w-2/3 px-3 mb-6 lg:mb-0`}>
            <Field
              label="Location"
              component={Location}
              name="location"
              placeholder="City or zip code"
            />
          </div>
          <div css={tw`flex items-end w-full lg:w-1/3 px-3 mb-6 lg:mb-0`}>
            <Button primary disable={!location} css={tw`w-full`} type="submit">
              Find treatment
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  const values = getFormValues('homepage')(state);

  return {
    initialValues: {
      ...state.form.filters
    },
    location: values && values.location
  };
};

export { Homepage };
export default connect(mapStateToProps)(
  reduxForm({
    form: 'homepage',
    destroyOnUnmount: false
  })(Homepage)
);
