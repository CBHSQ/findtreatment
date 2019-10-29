import React, { Component } from 'react';
import { withTheme } from 'styled-components';
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

  @media(min-width: ${props => props.theme.screens.lg}) {
    display: block;
  }
`;

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

    if (prevProps.loading && !this.props.loading) {
      const el = document.querySelector('h1') || document.querySelector('h2');
      if (!el) return;
      el.focus();
    }
  }

  clearResultsIfNoLocation = () => {
    const { destroyFacilities, hasResults, location } = this.props;

    if (hasResults && !(location || {}).latLng) {
      destroyFacilities();
    }
  };

  toggleFilters = () => {
    this.setState(
      {
        filtersHidden: !this.state.filtersHidden
      },
      () => {
        if (!this.isDesktop() && this.state.filtersHidden && this._listTop) {
          this._listTop.scrollIntoView();
        }
      }
    );
  };

  previousValues = null;

  submit = values => {
    const { handleReceiveFacilities } = this.props;

    if (deepEqual(values, this.previousValues)) return;

    if (values.location.latLng) {
      this.previousValues = values;
      handleReceiveFacilities(values);

      if (this.isDesktop()) {
        const el = document.querySelector('h1') || document.querySelector('h2');
        if (!el) return;
        el.scrollIntoView();
      }
    }
  };

  isDesktop = () =>
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >=
    Number(this.props.theme.screens.lg.replace('px', ''));

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
            <h1 css={tw`text-sm lg:text-xl lg:font-heading`} tabIndex="-1">
              Showing <span css={tw`font-bold`}>{recordCount} facilities</span>{' '}
              within {distance ? distance / METERS_PER_MILE : '100+'} miles of{' '}
              {location.address}
            </h1>
          </div>
          <span ref={el => (this._listTop = el)} />
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
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  hasResults: PropTypes.bool.isRequired,
  destroyFacilities: PropTypes.func.isRequired,
  handleReceiveFacilities: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
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

const mapDispatchToProps = {
  destroyFacilities,
  handleReceiveFacilities
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(Results));
