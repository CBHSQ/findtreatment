import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { handleReceiveFacilities } from '../actions/facilities';
import ScreenContext from './ScreenContext';

import { Button } from './Input';
import Error from './Error';
import ResultsList from './ResultsList';
import FormFilters from './Form/FormFilters';

export class Results extends Component {
  state = {
    filtersHidden: true
  };

  toggleFilters = () => {
    this.setState({
      filtersHidden: !this.state.filtersHidden
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
    const { filtersHidden } = this.state;

    if (error) {
      return <Error />;
    }

    return (
      <div css={tw`py-10 bg-gray-lightest border-t border-gray-lighter`}>
        <div className="container">
          <Helmet>
            <title>Results</title>
          </Helmet>
          {!isDesktop && (
            <Button onClick={this.toggleFilters} primary css={tw`w-full mb-4`}>
              {filtersHidden ? 'Filters' : 'Show reesults'}
            </Button>
          )}
          <div css={tw`flex flex-wrap -mx-4`}>
            {(isDesktop || !this.state.filtersHidden) && (
              <div css={tw`w-full lg:w-1/3 px-4  mb-6 lg:mb-0 print:hidden`}>
                <div
                  css={tw`bg-teal-lighter rounded shadow border border-gray-light`}
                >
                  <div css={tw`p-4 shadow`}>
                    <h2 css={tw`text-2xl font-heading font-bold`}>
                      Refine search results
                    </h2>
                  </div>
                  <FormFilters onSubmit={this.submit} isDesktop={isDesktop} />
                </div>
              </div>
            )}
            {(isDesktop || this.state.filtersHidden) && (
              <div css={tw`w-full lg:w-2/3 px-4`}>
                <ResultsList
                  loading={loading}
                  rows={rows}
                  page={page}
                  totalPages={totalPages}
                  recordCount={recordCount}
                  hasResults={hasResults}
                />
              </div>
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
