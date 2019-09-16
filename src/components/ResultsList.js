import React, { Component } from 'react';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Loading from './Loading';
import NoLocation from './NoLocation';
import NoResults from './NoResults';
import Card from './Card';
import Pagination from './Pagination';

export class ResultsList extends Component {
  render() {
    const { hasResults, loading, rows, page, totalPages } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (!rows) {
      return <NoLocation />;
    }

    if (!hasResults) {
      return <NoResults />;
    }

    return (
      <>
        <ul>
          {rows.map(result => (
            <Card key={result.frid} {...result} />
          ))}
        </ul>
        <Pagination page={page} totalPages={totalPages} />
      </>
    );
  }
}

ResultsList.propTypes = {
  hasResults: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.number,
  recordCount: PropTypes.number,
  rows: PropTypes.array,
  totalPages: PropTypes.number
};

export default connect()(ResultsList);
