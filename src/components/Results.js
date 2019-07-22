import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { connect } from 'react-redux';
import withSizes from 'react-sizes';

import { handleReceiveFacilities } from '../actions/facilities';

import Loading from './Loading';
import ResultsList from './ResultsList';
import Filters from './Form/Filters';
import MapContainer from './Map/MapContainer';

export class Results extends Component {
  state = {
    filtersHidden: false,
    resultsHidden: false
  };

  toggleFilters = () => {
    this.setState({
      filtersHidden: !this.state.filtersHidden
    });
  };

  toggleResults = () => {
    this.setState({
      resultsHidden: !this.state.resultsHidden
    });
  };

  submit = values => {
    const { dispatch } = this.props;

    dispatch(handleReceiveFacilities(values));

    this.toggleFilters();
    window.scrollTo(0, 0);
  };

  render() {
    const { loading, data, isDesktop } = this.props;
    const { rows, page, totalPages, recordCount } = data;
    const hasResults = rows && rows.length > 0;

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="container">
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full lg:w-3/5 px-6 mb-6 lg:mb-0`}>
            {(isDesktop ||
              (!this.state.filtersHidden && !this.state.resultsHidden)) && (
              <ResultsList
                rows={rows}
                page={page}
                totalPages={totalPages}
                recordCount={recordCount}
              />
            )}
          </div>
          <div css={tw`w-full lg:w-2/5 px-6 mb-6 order-first lg:order-last`}>
            <Filters
              onSubmit={this.submit}
              toggleFilters={this.toggleFilters}
              toggleResults={this.toggleResults}
              filtersHidden={this.state.filtersHidden}
              resultsHidden={this.state.resultsHidden}
              hasResults={hasResults}
            />
            {((isDesktop && hasResults) ||
              (this.state.resultsHidden && !this.state.filtersHidden)) && (
              <div css={tw`lg:pt-6 lg:border-t`}>
                <div css={tw`relative h-64 w-full mb-6`}>
                  <MapContainer rows={rows} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  isDesktop: width > 1024
});

const mapStateToProps = ({ facilities }) => {
  const { loading, data } = facilities;

  return {
    loading,
    data
  };
};

export default connect(mapStateToProps)(withSizes(mapSizesToProps)(Results));
