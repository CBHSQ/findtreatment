import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { METERS_PER_MILE } from '../utils/constants';

import Loading from './Loading';
import NoLocation from './NoLocation';
import NoResults from './NoResults';
import Card from './Card';
import Pagination from './Pagination';

export class ResultsList extends Component {
  state = {
    location: {}
  };

  componentDidMount() {
    const { location } = this.props;
    if (location && location.latLng) {
      this.updateLocation();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { latLng } = this.props.location;
    if (latLng && latLng !== prevState.location.latLng) {
      this.updateLocation();
    }
  }

  updateLocation = () => {
    this.setState({
      location: this.props.location
    });
  };

  render() {
    const {
      distance,
      hasResults,
      loading,
      rows,
      page,
      totalPages,
      recordCount
    } = this.props;

    if (loading) {
      return <Loading />;
    }

    if (!rows) {
      return <NoLocation />;
    }

    if (!hasResults) {
      return <NoResults />;
    }

    return (
      <>
        <div css={tw`mb-4`}>
          <h1 css={tw`text-xl font-heading`}>
            Showing <span css={tw`font-bold`}>{recordCount} facilities</span>{' '}
            within {distance ? distance / METERS_PER_MILE : '100+'} miles of{' '}
            {this.state.location.address}
          </h1>
        </div>
        <div css={tw`border border-yellow bg-yellow-lighter p-4 mb-4 text-sm`}>
          <span css={tw`block font-heading font-bold mb-4 uppercase`}>
            Before you call
          </span>
          <p>
            Before visiting a facility, call to make sure they have the services
            you need. What to expect when you call. Not sure what you need?
            Learn more about different types of treatment. All facilities are
            licensed by their states, and provide assessments.
          </p>
        </div>
        <div css={tw`text-sm italic text-right mb-2`}>Sorted by distance</div>
        <ul>
          {rows.map(result => (
            <Card key={result.frid} {...result} />
          ))}
        </ul>
        <Pagination page={page} totalPages={totalPages} />
      </>
    );
  }
}

ResultsList.propTypes = {
  hasResults: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  page: PropTypes.number,
  recordCount: PropTypes.number,
  rows: PropTypes.array,
  totalPages: PropTypes.number
};

const selector = formValueSelector('filters');
const mapStateToProps = state => ({
  distance: selector(state, 'distance'),
  location: selector(state, 'location')
});

export default connect(mapStateToProps)(ResultsList);
