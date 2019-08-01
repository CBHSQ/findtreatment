import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues, reset } from 'redux-form';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { Button, Location } from '../Input';
import { destroyFacilities } from '../../actions/facilities';
import { LOCATION_WARNING } from '../../utils/warnings';

const Form = styled.form`
  ${tw`mb-10`}
`;

const submitStyle = {
  marginTop: '26px'
};

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
    if (!this.props.location) {
      return submitEvent.preventDefault();
    }

    this.props.handleSubmit(submitEvent);
  };

  render() {
    const { location } = this.props;
    const { showWarning } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <div css={tw`flex flex-wrap -mx-3`}>
          <div css={tw`w-full lg:w-2/3 px-3 mb-6 lg:mb-0`}>
            <Field
              label="Location"
              component={Location}
              name="location"
              placeholder="City or zip code"
              toggleShowWarning={this.toggleShowWarning}
            />
          </div>
          <div
            style={submitStyle}
            css={tw`flex items-start w-full lg:w-1/3 px-3 mb-6 lg:mb-0`}
          >
            <Button primary disable={!location} css={tw`w-full`} type="submit">
              Find treatment
            </Button>
          </div>
          {showWarning && (
            <div css={tw`w-full px-3 mt-2 text-red-500 text-sm`}>
              {LOCATION_WARNING}
            </div>
          )}
        </div>
      </Form>
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
  const values = getFormValues('homepage')(state);

  return {
    initialValues: {
      ...state.form.filters
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
