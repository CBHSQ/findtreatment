import React, { Component } from 'react';
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
import { handleReceiveFacility } from '../actions/facility';
import { reportFacility } from '../actions/facilities';

import MapContainer from './Map/MapContainer';
import { Button } from './Input';
import { hash } from '../utils/misc';
import { OutboundLink } from 'react-ga';

export class Details extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;

    if (match.params.facilitySlug && match.params.paramString) {
      dispatch(
        handleReceiveFacility({
          slug: match.params.facilitySlug,
          encodedParamString: match.params.paramString
        })
      );
    }
  }

  renderService(service) {
    return (
      <div css={tw`mb-4 pb-4 border-b`} key={service.f2}>
        <h3 css={tw`font-semibold text-sm`}>{service.f1}</h3>
        <ul
          css={tw`text-sm leading-relaxed text-gray-700 list-disc list-inside`}
        >
          {service.f3.split('; ').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  reportFacility = () => {
    const { facility } = this.props;
    this.props.reportFacility(facility.frid);
  };

  render() {
    if (!this.props.facility) {
      return (
        <div className="results-loading" css={tw`text-center py-6 italic`}>
          Loading details...
        </div>
      );
    }

    const {
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
    } = this.props.facility;

    return (
      <div className="container">
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full md:w-3/5 px-6 mb-6`}>
            <h1 css={tw`font-bold mb-6`}>
              {name1}
              {name2 && <span css={tw`block text-lg font-light`}>{name2}</span>}
            </h1>
            <div css={tw`border-l-4 border-blue-500 py-2 px-4 mb-6`}>
              <h2 css={tw`mb-2 font-semibold`}>Next step:</h2>
              <div css={tw`lg:flex items-start`}>
                <OutboundLink to={`tel:${phone}`} eventLabel="Facility Phone #">
                  <Button
                    primary
                    css={tw`w-full lg:w-auto lg:mr-2 mb-2 lg:mb-0`}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      css={tw`fill-current w-4 h-4 mr-2`}
                    />
                    <div>
                      <span css={tw`inline-block font-normal`}>Call</span>{' '}
                      {phone}
                    </div>
                  </Button>
                </OutboundLink>
                {website !== 'http://' && (
                  <OutboundLink
                    to={website}
                    target="_blank"
                    eventLabel="Facility website"
                    rel="noopener noreferrer"
                  >
                    <Button base css={tw`w-full lg:w-auto`}>
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        css={tw`fill-current w-4 h-4 mr-2`}
                      />
                      Visit website
                    </Button>
                  </OutboundLink>
                )}
              </div>
              <Link
                to="/content/treatment-options#calling-a-facility"
                css={tw`mb-2 text-sm`}
              >
                What to expect when you call
              </Link>
            </div>
            <h2 css={tw`mb-2 font-semibold`}>Services</h2>
            {services.map(this.renderService)}
          </div>
          <div css={tw`relative w-full md:w-2/5 px-6 mb-6 `}>
            <div css={tw`border-b pb-6 mb-6`}>
              <h2 css={tw`mb-4`}>Location</h2>
              <div css={tw`relative h-64 w-full mb-2`}>
                <MapContainer
                  rows={[this.props.facility]}
                  singleMarker={true}
                />
              </div>
              <div css={tw`text-gray-600`}>
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
            {!this.props.isReported ? (
              <Button
                className="report-facility"
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

const mapDispatchToProps = dispatch => ({
  reportFacility(frid) {
    dispatch(reportFacility(frid));
  },
  dispatch
});

const mapStateToProps = ({ facilities }, ownProps) => {
  const { data, reported } = facilities;
  const { rows } = data;
  const hashedId = ownProps.match.params.facilitySlug
    .split('-')
    .slice(-1)
    .pop();
  const facility =
    rows && rows.find(({ name1, frid }) => hash(frid) === hashedId);

  return {
    facility,
    isReported: facility && reported.includes(facility.frid)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
