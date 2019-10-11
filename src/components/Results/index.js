import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Helmet } from 'react-helmet';
import deepEqual from 'deep-equal';
import {
  destroyFacilities,
  handleReceiveFacilities
} from '../../actions/facilities';
import { METERS_PER_MILE } from '../../utils/constants';
import { theme } from '../../tailwind.js';

import Error from '../Error';
import ResultsList from './ResultsList';
import ReturnToTop from '../ReturnToTop';
import FormFilters from '../Form/FormFilters';
import FilterToggle from './FilterToggle';
import Loading from '../Loading';
import NoLocation from './NoLocation';
import NoResults from './NoResults';

const DesktopOnlyUnless = styled.div`
  ${props => props.show || tw`hidden`}

  @media(min-width: ${theme.screens.lg}) {
    display: initial;
  }
`;

const isDesktop = () =>
  Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >=
  Number(theme.screens.lg.replace('px', ''));

export class Results extends Component {
  state = {
    filtersHidden: true
  };

  componentDidMount() {
    const { hasResults, location } = this.props;

    if (!hasResults && !(location || {}).latLng) {
      this.toggleFilters();
    }

    this.clearResultsIfNoLocation();
  }

  componentDidUpdate(prevProps) {
    this.clearResultsIfNoLocation();
  }

  clearResultsIfNoLocation = () => {
    const { dispatch, hasResults, location } = this.props;

    if (hasResults && !(location || {}).latLng) {
      dispatch(destroyFacilities());
    }
  };

  toggleFilters = () => {
    this.setState({
      filtersHidden: !this.state.filtersHidden
    });
  };

  previousValues = null;

  submit = values => {
    const { dispatch } = this.props;

    if (deepEqual(values, this.previousValues)) return;

    if (values.location.latLng) {
      this.previousValues = values;
      dispatch(handleReceiveFacilities(values));

      if (isDesktop()) {
        window.scrollTo(0, 0);
      }
    }
  };

  render() {
    const { distance, loading, location, error, data, hasResults } = this.props;
    const { rows, page, totalPages, recordCount } = data;
    const { filtersHidden } = this.state;

    if (error) {
      return <Error />;
    }

    let mainContent;
    if (loading) {
      mainContent = <Loading />;
    } else if (!(location || {}).latLng) {
      mainContent = <NoLocation />;
    } else if (!hasResults) {
      mainContent = <NoResults />;
    } else {
      mainContent = (
        <DesktopOnlyUnless show={filtersHidden}>
          <div css={tw`mb-4`}>
            <h1 css={tw`text-sm lg:text-xl lg:font-heading`}>
              Showing <span css={tw`font-bold`}>{recordCount} facilities</span>{' '}
              within {distance ? distance / METERS_PER_MILE : '100+'} miles of{' '}
              {location.address}
            </h1>
          </div>
          <ResultsList
            loading={loading}
            rows={rows}
            page={page}
            totalPages={totalPages}
            recordCount={recordCount}
          />
        </DesktopOnlyUnless>
      );
    }

    return (
      <div css={tw`pt-10 bg-gray-lightest border-t border-gray-lighter`}>
        <div className="container">
          <Helmet>
            <title>Results</title>
            <meta property="og:title" content="Results" />
            <meta
              name="description"
              content="Search for state-licensed treatment near you for addiction and substance use disorder."
            />
            <meta
              property="og:description"
              content="Search for state-licensed treatment near you for addiction and substance use disorder."
            />
          </Helmet>

          <div css={tw`lg:hidden`}>
            <FilterToggle
              filtersHidden={filtersHidden}
              loading={loading}
              toggleFilters={this.toggleFilters}
            />
          </div>

          <div css={tw`flex flex-wrap -mx-4`}>
            <DesktopOnlyUnless
              show={!filtersHidden}
              css={tw`w-full lg:w-1/3 px-4 mb-6 lg:mb-0 print:hidden`}
            >
              <FormFilters
                onSubmit={this.submit}
                toggleFilters={this.toggleFilters}
                recordCount={recordCount}
              />
            </DesktopOnlyUnless>
            <div css={tw`w-full lg:w-2/3 px-4`}>{mainContent}</div>
          </div>
        </div>
        <div css={tw`sm:pb-10`}>
          <ReturnToTop />
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  distance: PropTypes.number,
  location: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  hasResults: PropTypes.bool.isRequired
};

const selector = formValueSelector('filters');
const mapStateToProps = state => {
  const { facilities } = state;
  const { loading, error, data } = facilities;
  const { rows } = data;
  const hasResults = (rows || {}).length > 0;

  return {
    distance: selector(state, 'distance'),
    location: selector(state, 'location'),
    loading,
    error,
    data,
    hasResults
  };
};

export default connect(mapStateToProps)(Results);
