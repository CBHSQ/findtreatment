import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { connect } from 'react-redux';
import NoResults from './NoResults';
import Card from './Card';
import Pagination from './Pagination';
import Filter from './Form/Filter';

class Results extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const hasResults = this.props.rows && this.props.rows.length > 0;

    return (
      <div className="container">
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full lg:w-3/5 px-6 mb-6 lg:mb-0`}>
            {this.props.loading ? (
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
                      Showing page {this.props.page} of {this.props.totalPages}{' '}
                      <span css={tw`italic`}>
                        ({this.props.recordCount} results)
                      </span>
                    </span>
                  )}
                </div>
                <ul css={tw``}>
                  {hasResults ? (
                    this.props.rows.map(result => (
                      <Card key={result.frid} location={result} />
                    ))
                  ) : (
                    <NoResults />
                  )}
                </ul>
                {hasResults && (
                  <Pagination
                    page={this.props.page}
                    totalPages={this.props.totalPages}
                  />
                )}
              </div>
            )}
          </div>
          <div css={tw`w-full lg:w-2/5 px-6`}>
            <h2 css={tw`mb-6`}>Filters</h2>
            <Filter css={tw`mb-6`} />
            {hasResults && (
              <div css={tw`pt-6 border-t`}>
                <div css={tw`relative h-64 w-full mb-6`}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ locations }) => {
  if (locations.data) {
    return {
      loading: locations.loading,
      page: locations.data.page,
      recordCount: locations.data.recordCount,
      rows: locations.data.rows,
      totalPages: locations.data.totalPages
    };
  }
};

export default connect(mapStateToProps)(Results);
