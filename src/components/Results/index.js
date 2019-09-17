import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formValueSelector, reset } from 'redux-form';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

import {
  destroyFacilities,
  handleReceiveFacilities
} from '../../actions/facilities';
import ScreenContext from '../ScreenContext';
import { METERS_PER_MILE } from '../../utils/constants';

import { Button } from '../Input';
import Error from '../Error';
import Warning from '../Warning';
import ResultsList from './ResultsList';
import FormFilters from '../Form/FormFilters';

export class Results extends Component {
  state = {
    filtersHidden: true,
    cancelButtonHidden: false
  };

  componentDidMount() {
    this.clearResultsIfNoLocation();
  }

  componentDidUpdate(prevProps) {
    this.clearResultsIfNoLocation();
  }

  clearResultsIfNoLocation = () => {
    const { data, dispatch, location } = this.props;
    const { rows } = data;
    const hasResults = !!(rows && rows.length > 0);

    if (hasResults && !(location || {}).latLng) {
      dispatch(destroyFacilities());
    }
  };

  toggleFilters = () => {
    this.setState({
      filtersHidden: !this.state.filtersHidden,
      cancelButtonHidden: false
    });
  };

  handleReset = () => {
    const { dispatch } = this.props;

    dispatch(reset('filters'));
  };

  submit = values => {
    const { dispatch } = this.props;
    const isDesktop = this.context;

    if (values.location.latLng) {
      dispatch(handleReceiveFacilities(values));
    }

    if (isDesktop) {
      window.scrollTo(0, 0);
    }

    if (!isDesktop) {
      this.setState({
        cancelButtonHidden: true
      });
    }
  };

  renderHeading = () => {
    const { data, distance, location } = this.props;
    const { recordCount } = data;

    return (
      <div css={tw`mb-4`}>
        <h1 css={tw`text-sm lg:text-xl lg:font-heading`}>
          Showing <span css={tw`font-bold`}>{recordCount} facilities</span>{' '}
          within {distance ? distance / METERS_PER_MILE : '100+'} miles of{' '}
          {location.address}
        </h1>
      </div>
    );
  };

  renderWarning = () => (
    <Warning heading="Before you call">
      <p>
        Before visiting a facility, call to make sure they have the services you
        need.{' '}
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
          Learn more about different types of treatment.
        </Link>
        . All facilities are licensed by their states, and provide assessments.
      </p>
    </Warning>
  );

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
            <>
              {filtersHidden && hasResults && (
                <>
                  {this.renderWarning()}
                  {this.renderHeading()}
                </>
              )}
              <div css={tw`flex justify-between mb-4`}>
                <Button
                  primary={filtersHidden}
                  link={!filtersHidden}
                  css={filtersHidden ? tw`w-full` : tw`ml-4`}
                  style={
                    this.state.cancelButtonHidden
                      ? { ...tw`invisible` }
                      : { ...tw`visible` }
                  }
                  onClick={this.toggleFilters}
                >
                  {filtersHidden ? (
                    <span css={tw`text-xl`}>
                      <FontAwesomeIcon
                        icon={faSlidersH}
                        css={tw`mr-1`}
                        rotation={90}
                      />
                      Filters
                    </span>
                  ) : (
                    '❮ Cancel'
                  )}
                </Button>
                {!filtersHidden && (
                  <>
                    <h2 css={tw`text-lg font-heading font-bold uppercase`}>
                      Filters
                    </h2>
                    <Button link css={tw`mr-4`} onClick={this.handleReset}>
                      Clear all
                    </Button>
                  </>
                )}
              </div>
            </>
          )}
          <div css={tw`flex flex-wrap -mx-4`}>
            {(isDesktop || !this.state.filtersHidden) && (
              <div css={tw`w-full lg:w-1/3 px-4  mb-6 lg:mb-0 print:hidden`}>
                <FormFilters
                  onSubmit={this.submit}
                  isDesktop={isDesktop}
                  toggleFilters={this.toggleFilters}
                  recordCount={recordCount}
                />
              </div>
            )}
            {(isDesktop || this.state.filtersHidden) && (
              <div css={tw`w-full lg:w-2/3 px-4`}>
                {hasResults && (
                  <>
                    {isDesktop && (
                      <>
                        {this.renderHeading()}
                        {this.renderWarning()}
                      </>
                    )}
                    <div css={tw`text-sm italic text-right mb-2`}>
                      Sorted by distance
                    </div>
                  </>
                )}
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

const selector = formValueSelector('filters');
const mapStateToProps = state => {
  const { facilities } = state;
  const { loading, error, data } = facilities;

  return {
    distance: selector(state, 'distance'),
    location: selector(state, 'location'),
    loading,
    error,
    data
  };
};

export default connect(mapStateToProps)(Results);
