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
        <div
          css={tw`mb-6 rounded bg-blue-100 border border-blue-500 text-blue-700 px-4 py-3`}
        >
          <p css={tw`font-bold`}>Before you call</p>
          <p css={tw`text-sm`}>
            Before visiting a facility, call to make sure they have the services
            you need. Not sure what you need? All facilities are licensed by
            their states, and provide assessments.
          </p>
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
