import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';

import ResultsWarning from './ResultsWarning';
import Card from '../Card';
import Pagination from './Pagination';

export class ResultsList extends Component {
  componentDidMount() {
    console.log('I MOUNT');
  }
  render() {
    const { rows, page, totalPages } = this.props;

    return (
      <>
        <ResultsWarning />
        <div css={tw`text-sm italic text-right mb-2`}>Sorted by distance</div>
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
  loading: PropTypes.bool.isRequired,
  page: PropTypes.number,
  recordCount: PropTypes.number,
  rows: PropTypes.array,
  totalPages: PropTypes.number
};

export default ResultsList;
