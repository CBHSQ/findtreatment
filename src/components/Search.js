import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleReceiveFacilities } from '../actions/facilities';
import SearchHome from './Form/SearchHome';
import SearchFilter from './Form/SearchFilter';

class Search extends Component {
  submit = values => {
    const { dispatch } = this.props;

    dispatch(handleReceiveFacilities(values));

    if (this.props.layout === 'Home') {
      this.props.history.push({
        pathname: '/results'
      });
    }
  };

  render() {
    if (this.props.layout === 'Home') {
      return <SearchHome onSubmit={this.submit} />;
    }

    if (this.props.layout === 'Filter') {
      return <SearchFilter onSubmit={this.submit} />;
    }
  }
}

export default withRouter(connect()(Search));
