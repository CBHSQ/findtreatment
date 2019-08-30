import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import qs from 'qs';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faExternalLinkAlt,
  faFlag
} from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'react-ga';
import { Helmet } from 'react-helmet';

import { handleReceiveFacility, destroyFacility } from '../actions/facility';
import { reportFacility } from '../actions/facilities';

import Error from './Error';
import NoMatch from './NoMatch';
import Loading from './Loading';
import MapContainer from './Map/MapContainer';
import { Button } from './Input';

export class Details extends Component {
  componentDidMount() {
    const {
      handleReceiveFacility,
      location,
      match,
      isInternalLink
    } = this.props;

    if (!isInternalLink) {
      const params = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });

      handleReceiveFacility(match.params.frid, params);
    }
  }

  componentWillUnmount() {
    const { destroyFacility } = this.props;

    destroyFacility();
  }

  returnToResults = () => {
    this.props.history.goBack();
  };

  renderService = ({ name, values }) => (
    <div css={tw`mb-4 pb-4 border-b`} key={name}>
      <h3 css={tw`font-semibold text-sm`}>{name}</h3>
      <ul css={tw`text-sm leading-relaxed text-gray-700 list-disc list-inside`}>
        {values.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  reportFacility = () => {
    const { data, reportFacility } = this.props;

    reportFacility(data.frid);
  };

  render() {
    const { loading, error, data, isReported, isInternalLink } = this.props;
    const hasResult = data && Object.keys(data).length > 0;

    if (error) {
      return <Error />;
    }

    if (loading) {
      return <Loading />;
    }

    if (!loading && !hasResult) {
      return <NoMatch />;
    }

    const {
      frid,
      longitude,
      latitude,
      name1,
      name2,
      street1,
      street2,
      city,
      state,
      zip,
      services,
      phone,
      website
    } = data;

    return (
      <div className="container">
        <Helmet>
          <title>{name1}</title>
        </Helmet>
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full md:w-3/5 px-6 mb-6`}>
            {isInternalLink && (
              <Button
                link
                className="back-link"
                onClick={this.returnToResults}
                css={tw`print:hidden`}
              >
                ❮ Return to results
              </Button>
            )}
            <h1 css={tw`font-bold mb-6`}>
              {name1}
              {name2 && <span css={tw`block text-lg font-light`}>{name2}</span>}
            </h1>
            <div css={tw`border-l-4 border-blue-500 py-2 px-4 mb-6`}>
              <h2 css={tw`mb-2 font-semibold`}>Next step:</h2>
              <ul css={tw`hidden print:block`}>
                <li>
                  <span css={tw`font-bold`}>Phone:</span> {phone}
                </li>
                <li>
                  <span css={tw`font-bold`}>Website:</span> {website}
                </li>
              </ul>
              <div css={tw`lg:flex items-start print:hidden`}>
                <Button
                  as={OutboundLink}
                  primary
                  to={`tel:${phone}`}
                  eventLabel="Facility Phone #"
                  css={tw`w-full lg:w-auto lg:mr-2 mb-2 lg:mb-0`}
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    css={tw`fill-current w-4 h-4 mr-2`}
                  />
                  <div>
                    <span css={tw`inline-block font-normal`}>Call</span> {phone}
                  </div>
                </Button>
                {website !== 'http://' && (
                  <Button
                    as={OutboundLink}
                    base
                    to={website}
                    target="_blank"
                    eventLabel="Facility website"
                    rel="noopener noreferrer"
                    css={tw`w-full lg:w-auto`}
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      css={tw`fill-current w-4 h-4 mr-2`}
                    />
                    Visit website
                  </Button>
                )}
              </div>
              <Link
                to="/content/treatment-options#calling-a-facility"
                css={tw`mb-2 text-sm print:hidden`}
              >
                What to expect when you call
              </Link>
            </div>
            <h2 css={tw`mb-2 font-semibold`}>Services</h2>
            {Object.keys(services).map(key =>
              this.renderService(services[key])
            )}
          </div>
          <div css={tw`relative w-full md:w-2/5 px-6 mb-6 `}>
            <div css={tw`border-b pb-6 mb-6`}>
              <h2 css={tw`mb-4`}>Location</h2>
              <div css={tw`relative h-64 w-full mb-2`}>
                <MapContainer
                  frid={frid}
                  latitude={latitude}
                  longitude={longitude}
                  name1={name1}
                  phone={phone}
                />
              </div>
              <div css={tw`text-gray-700`}>
                {street1}, {street2 && street2 + ','}
                <br />
                {city}, {state} {zip}
                <br />
                <OutboundLink
                  eventLabel="Driving directions link from details"
                  to={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
                    `${street1}, ${street2 &&
                      street2 + ','} ${city}, ${state} ${zip}`
                  )}`}
                  css={tw`font-bold`}
                >
                  Get driving directions
                </OutboundLink>
              </div>
            </div>
            {!isReported ? (
              <Button
                className="report-facility"
                css={tw`print:hidden`}
                secondary
                onClick={this.reportFacility}
              >
                <FontAwesomeIcon icon={faFlag} css={tw`text-orange-600 mr-2`} />
                Report a problem with this listing
              </Button>
            ) : (
              <div
                role="alert"
                css={tw`w-full text-center rounded bg-green-100 border border-green-500 text-green-700 px-4 py-3`}
              >
                <strong>Thank you!</strong> Your feedback has been recorded.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  isReported: PropTypes.bool.isRequired,
  isInternalLink: PropTypes.bool.isRequired,
  reportFacility: PropTypes.func.isRequired,
  handleReceiveFacility: PropTypes.func.isRequired,
  destroyFacility: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  reportFacility(frid) {
    dispatch(reportFacility(frid));
  },

  handleReceiveFacility(frid, params) {
    dispatch(handleReceiveFacility(frid, params));
  },

  destroyFacility() {
    dispatch(destroyFacility());
  }
});

const mapStateToProps = ({ facility, facilities }, ownProps) => {
  let data, isInternalLink;

  // If facility results exist in the store, match frid using the existing data
  if ((facilities.data.rows || {}).length > 0) {
    data = facilities.data.rows.find(
      ({ frid }) => frid === ownProps.match.params.frid
    );
    isInternalLink = true;
  } else {
    data = facility.data;
    isInternalLink = false;
  }

  return {
    data,
    error: facility.error,
    loading: facility.loading,
    isReported: facilities.reported.includes(data.frid),
    isInternalLink
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
