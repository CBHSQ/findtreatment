import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { handleReceiveFacilities } from '../actions/facilities';

import ScreenContext from './ScreenContext';
import Error from './Error';
import Alert from './Alert';
import ResultsList from './ResultsList';
import FormFilters from './Form/FormFilters';

export class Results extends Component {
  submit = values => {
    const { dispatch } = this.props;

    dispatch(handleReceiveFacilities(values));

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
      <div css={tw`py-10 bg-gray-lightest border-t border-gray-lighter`}>
        <div className="container">
          <Helmet>
            <title>Results</title>
          </Helmet>
          <div css={tw`flex flex-wrap -mx-4`}>
            <div css={tw`w-full lg:w-1/3 px-4  mb-6 lg:mb-0 print:hidden`}>
              <div css={tw`bg-white rounded shadow`}>
                <div css={tw`p-4 border-b-4 border-gray-lighter`}>
                  <h1 css={tw`text-2xl font-heading font-bold`}>
                    Refine search results
                  </h1>
                </div>
                <FormFilters
                  onSubmit={this.submit}
                  hasResults={hasResults}
                  isDesktop={isDesktop}
                />
              </div>
            </div>
            <div css={tw`w-full lg:w-2/3 px-4`}>
              {hasResults && <Alert />}
              <ResultsList
                loading={loading}
                rows={rows}
                page={page}
                totalPages={totalPages}
                recordCount={recordCount}
                hasResults={hasResults}
              />
            </div>
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
