import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { connect } from 'react-redux';
import NoResults from './NoResults';
import Card from './Card';
import Pagination from './Pagination';
import Search from './Search';
import MapContainer from './MapContainer';

class Results extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { loading, rows, page, totalPages, recordCount } = this.props;
    const hasResults = rows && rows.length > 0;

    return (
      <div className="container">
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full lg:w-3/5 px-6 mb-6 lg:mb-0`}>
            {loading ? (
              <div css={tw`text-center py-6 italic`}>Loading results...</div>
            ) : (
              <div>
                <div
                  css={tw`lg:flex lg:justify-between lg:items-baseline mb-6`}
                >
                  <h1 css={tw`mb-2 lg:mb-0`}>
                    Results{' '}
                    <span css={tw`text-lg text-gray-600 font-light`}>
                      Treatment providers near you
                    </span>
                  </h1>
                  {hasResults && (
                    <span css={tw`block text-gray-500`}>
                      Showing page {this.props.page} of {totalPages}{' '}
                      <span css={tw`italic`}>({recordCount} results)</span>
                    </span>
                  )}
                </div>
                <ul css={tw``}>
                  {hasResults ? (
                    rows.map(result => <Card key={result.frid} {...result} />)
                  ) : (
                    <NoResults />
                  )}
                </ul>
                {hasResults && (
                  <Pagination page={page} totalPages={totalPages} />
                )}
              </div>
            )}
          </div>
          <div css={tw`w-full lg:w-2/5 px-6 mb-6`}>
            <h2 css={tw`mb-6`}>Filters</h2>
            <Search layout="Filter" css={tw`mb-6`} />

            {hasResults && (
              <div css={tw`pt-6 border-t`}>
                <div css={tw`relative h-64 w-full mb-6`}>
                  <MapContainer />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ locations }) => {
  return {
    loading: locations.loading,
    ...locations.data
  };
};

export default connect(mapStateToProps)(Results);
