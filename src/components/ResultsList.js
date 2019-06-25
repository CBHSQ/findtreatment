import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import NoResults from './NoResults';
import Card from './Card';
import Pagination from './Pagination';

export class ResultsList extends Component {
  render() {
    const { loading, rows, page, totalPages, recordCount } = this.props;
    const hasResults = rows && rows.length > 0;

    if (loading) {
      return (
        <div className="results-loading" css={tw`text-center py-6 italic`}>
          Loading results...
        </div>
      );
    }

    if (!hasResults) {
      return <NoResults />;
    }

    return (
      <>
        <div css={tw`lg:flex lg:justify-between lg:items-baseline mb-6`}>
          <h1 css={tw`mb-2 lg:mb-0`}>
            Results{' '}
            <span css={tw`text-lg text-gray-600 font-light`}>
              Treatment providers near you
            </span>
          </h1>
          <span css={tw`block text-gray-500`}>
            Showing page {page} of {totalPages}{' '}
            <span css={tw`italic`}>({recordCount} results)</span>
          </span>
        </div>
        <ul css={tw``}>
          {rows.map(result => (
            <Card key={result.frid} {...result} />
          ))}
        </ul>
        <Pagination page={page} totalPages={totalPages} />
      </>
    );
  }
}

export default ResultsList;
