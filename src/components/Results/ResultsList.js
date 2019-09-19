import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import Warning from '../Warning';
import Card from '../Card';
import Pagination from './Pagination';

export class ResultsList extends Component {
  render() {
    const { rows, page, totalPages } = this.props;

    return (
      <>
        <Warning heading="Before you call">
          <p>
            Before visiting a facility, call to make sure they have the services
            you need.{' '}
            <Link
              to="/content/treatment-options/calling-a-facility"
              css={tw`underline text-gray-darkest`}
            >
              What to expect when you call
            </Link>
            . Not sure what you need?{' '}
            <Link
              to="/content/treatment-options/types-of-treatment"
              css={tw`underline text-gray-darkest`}
            >
              Learn more about different types of treatment
            </Link>
            . All facilities are licensed by their states, and provide
            assessments.
          </p>
        </Warning>
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
