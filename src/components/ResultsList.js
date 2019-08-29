import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import Loading from './Loading';
import NoResults from './NoResults';
import Card from './Card';
import Pagination from './Pagination';

export class ResultsList extends Component {
  render() {
    const {
      hasResults,
      loading,
      location,
      rows,
      page,
      totalPages,
      recordCount
    } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (!hasResults) {
      return <NoResults />;
    }

    return (
      <>
        <div css={tw`lg:flex lg:justify-between mb-2 text-sm`}>
          <span>
            Showing <span css={tw`font-bold`}>{recordCount} facilities</span> in{' '}
            {location.address}
          </span>
          <span css={tw`italic`}>Sorted by distance</span>
        </div>
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
  location: PropTypes.object.isRequired,
  page: PropTypes.number,
  recordCount: PropTypes.number,
  rows: PropTypes.array,
  totalPages: PropTypes.number
};

const selector = formValueSelector('filters');
const mapStateToProps = state => ({
  location: selector(state, 'location')
});

export default connect(mapStateToProps)(ResultsList);
