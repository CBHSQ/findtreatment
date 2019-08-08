import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { handleReceiveFacilities } from '../actions/facilities';

import ScreenContext from './ScreenContext';
import Error from './Error';
import ResultsList from './ResultsList';
import FormFilters from './Form/FormFilters';
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
    const { loading, error, data } = this.props;
    const { rows, page, totalPages, recordCount } = data;
    const hasResults = !!(rows && rows.length > 0);
    const isDesktop = this.context;

    if (error) {
      return <Error />;
    }

    return (
      <div className="container">
        <Helmet>
          <title>Results</title>
        </Helmet>
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full lg:w-2/5 px-6 mb-6 print:hidden`}>
            <FormFilters
              onSubmit={this.submit}
              toggleFilters={this.toggleFilters}
              toggleResults={this.toggleResults}
              filtersHidden={this.state.filtersHidden}
              resultsHidden={this.state.resultsHidden}
              hasResults={hasResults}
            />
            {((isDesktop && !loading && hasResults) ||
              (this.state.resultsHidden && !this.state.filtersHidden)) && (
              <div css={tw`lg:pt-6 lg:border-t`}>
                <div css={tw`relative h-64 w-full mb-6`}>
                  <MapContainer rows={rows} />
                </div>
              </div>
            )}
          </div>
          <div css={tw`w-full lg:w-3/5 px-6 mb-6 lg:mb-0`}>
            {(isDesktop ||
              (!this.state.filtersHidden && !this.state.resultsHidden)) && (
              <ResultsList
                loading={loading}
                rows={rows}
                page={page}
                totalPages={totalPages}
                recordCount={recordCount}
                hasResults={hasResults}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
Results.contextType = ScreenContext;

Results.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = ({ facilities }) => {
  const { loading, error, data } = facilities;

  return {
    loading,
    error,
    data
  };
};

export default connect(mapStateToProps)(Results);
