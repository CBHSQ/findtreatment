import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faExternalLinkAlt,
  faFlag,
  faPrint
} from '@fortawesome/free-solid-svg-icons';
import MapContainer from './Map/MapContainer';
import Button from './Form/Button';
import ReactGA, { OutboundLink } from 'react-ga';

class Details extends Component {
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

  flagData = frid => {
    ReactGA.event({
      category: `Listing Data Report`,
      action: `Data issue reported for frid`,
      label: frid.frid
    });
  };

  render() {
    if (!this.props.facility) {
      return <Redirect to="/" />;
    }

    const {
      frid,
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
              <h2 css={tw`mb-2 font-semibold`}>Next steps:</h2>
              <div css={tw`lg:flex items-start`}>
                <div>
                  <Button primary>
                    <FontAwesomeIcon
                      icon={faPhone}
                      css={tw`fill-current w-4 h-4 mr-2`}
                    />
                    <OutboundLink
                      to={`tel:${phone}`}
                      eventLabel="Facility Phone #"
                      css={tw`text-white hover:text-white`}
                    >
                      <span css={tw`font-light`}>Schedule Appointment | </span>
                      {phone}
                    </OutboundLink>
                  </Button>
                </div>
                {website !== 'http://' && (
                  <OutboundLink
                    to={website}
                    target="_blank"
                    eventLabel="Facility website"
                    rel="noopener noreferrer"
                    css={tw`w-full lg:w-auto block hover:text-gray-900 text-gray-900 bg-gray-300 hover:bg-gray-400 font-semibold py-3 px-4 rounded ml-2`}
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      css={tw`text-gray-700 mr-2`}
                    />
                    Visit website
                  </OutboundLink>
                )}
              </div>
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
                <a
                  css={tw`font-bold`}
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
                    `${street1}, ${street2 &&
                      street2 + ','} ${city}, ${state} ${zip}`
                  )}`}
                >
                  Get driving directions
                </a>
              </div>
            </div>
            <Button secondary css={tw`w-full mb-3`}>
              <FontAwesomeIcon icon={faPrint} css={tw`mr-2`} />
              Print provider details
            </Button>
            <Button secondary onClick={() => this.flagData({ frid })}>
              <FontAwesomeIcon icon={faFlag} css={tw`text-orange-600 mr-2`} />
              Report a problem with this listing
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  frid: PropTypes.string.isRequired,
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string,
  miles: PropTypes.number.isRequired,
  street1: PropTypes.string.isRequired,
  street2: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string
};

const mapStateToProps = ({ facilities }, ownProps) => {
  const { data } = facilities;
  const { rows } = data;
  const facility =
    rows && rows.find(({ frid }) => frid === ownProps.location.state.id);

  return {
    facility
  };
};

export default connect(mapStateToProps)(Details);
