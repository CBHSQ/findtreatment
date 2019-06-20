import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleReceiveLocations } from '../../actions/locations';
import FilterForm from './FilterForm';

class Filter extends React.Component {
  submit = values => {
    const { dispatch } = this.props;
    dispatch(handleReceiveLocations(values));
  };

  render() {
    return <FilterForm onSubmit={this.submit} />;
  }
}

export default withRouter(connect()(Filter));
