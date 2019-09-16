import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

import { destroyFacilities } from '../actions/facilities';
import { handleReceiveFacilities } from '../actions/facilities';
import { resetAllFilters } from '../actions/filters';
import ScreenContext from './ScreenContext';
import { METERS_PER_MILE } from '../utils/constants';

import { Button } from './Input';
import Error from './Error';
import Warning from './Warning';
import ResultsList from './ResultsList';
import FormFilters from './Form/FormFilters';

export class Results extends Component {
  state = {
    filtersHidden: true,
    location: {}
  };

  componentDidMount() {
    const { location } = this.props;
    if (location && location.latLng) {
      this.updateLocation();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;

    if ((location || {}).latLng !== prevState.location.latLng) {
      this.updateLocation();
    }
  }

  updateLocation = () => {
    this.setState({
      location: this.props.location
    });
  };

  toggleFilters = () => {
    this.setState({
      filtersHidden: !this.state.filtersHidden
    });
  };

  handleReset = () => {
    this.props.resetAllFilters();
  };

  submit = values => {
    const { dispatch } = this.props;

    if (values.location.latLng) {
      dispatch(handleReceiveFacilities(values));
    } else {
      dispatch(destroyFacilities());
    }

    window.scrollTo(0, 0);
    this.toggleFilters();
  };

  render() {
    const { loading, error, data, distance } = this.props;
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
            <div css={tw`flex justify-between mb-4`}>
              <Button
                primary={filtersHidden}
                link={!filtersHidden}
                css={filtersHidden ? tw`w-full` : tw`ml-4`}
                onClick={this.toggleFilters}
              >
                {filtersHidden ? (
                  <>
                    <FontAwesomeIcon
                      icon={faSlidersH}
                      css={tw`mr-1 text-gray-500`}
                      rotation={90}
                    />
                    Filters
                  </>
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
          )}
          <div css={tw`flex flex-wrap -mx-4`}>
            {(isDesktop || !this.state.filtersHidden) && (
              <div css={tw`w-full lg:w-1/3 px-4  mb-6 lg:mb-0 print:hidden`}>
                <FormFilters onSubmit={this.submit} isDesktop={isDesktop} />
              </div>
            )}
            {(isDesktop || this.state.filtersHidden) && (
              <div css={tw`w-full lg:w-2/3 px-4`}>
                {hasResults && (
                  <>
                    <div css={tw`mb-4`}>
                      <h1 css={tw`text-lg lg:text-xl font-heading`}>
                        Showing{' '}
                        <span css={tw`font-bold`}>
                          {recordCount} facilities
                        </span>{' '}
                        within {distance ? distance / METERS_PER_MILE : '100+'}{' '}
                        miles of {this.state.location.address}
                      </h1>
                    </div>
                    <Warning heading="Before you call">
                      <p>
                        Before visiting a facility, call to make sure they have
                        the services you need. What to expect when you call. Not
                        sure what you need? Learn more about different types of
                        treatment. All facilities are licensed by their states,
                        and provide assessments.
                      </p>
                    </Warning>
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

const mapDispatchToProps = dispatch => ({
  resetAllFilters() {
    dispatch(resetAllFilters());
  },
  dispatch
});

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
