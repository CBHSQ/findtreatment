import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleReceiveLocations } from '../../actions/locations';
import SearchForm from './SearchForm';

class Search extends React.Component {
  submit = values => {
    const { dispatch } = this.props;
    dispatch(handleReceiveLocations(values));
    this.props.history.push(`/results`);
  };

  render() {
    return <SearchForm onSubmit={this.submit} />;
  }
}

export default withRouter(connect()(Search));
