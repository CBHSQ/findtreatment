import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { OutboundLink } from 'react-ga';

import { GOOGLE_MAP_STATIC_URL } from '../../utils/constants';

export class MapStatic extends Component {
  render() {
    const {
      name1,
      street1,
      street2,
      city,
      state,
      zip,
      latitude,
      longitude,
      miles
    } = this.props;

    return (
      <>
        <OutboundLink
          eventLabel="Driving directions link from card thumbnail image"
          to={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
            `${street1}, ${street2 && street2 + ','} ${city}, ${state} ${zip}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${GOOGLE_MAP_STATIC_URL}?zoom=15&size=140x113&markers=size:small%7C${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
            alt={`Google map for ${name1}`}
            css={tw`w-full`}
          />
        </OutboundLink>
        {(miles || miles === 0) && (
          <div
            css={tw`bg-blue-lighter p-1 text-center text-sm text-gray`}
            className="map-static-miles"
          >
            {miles} mile{miles !== 1 && 's'}
          </div>
        )}
      </>
    );
  }
}

MapStatic.propTypes = {
  city: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  miles: PropTypes.number.isRequired,
  name1: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  street1: PropTypes.string.isRequired,
  street2: PropTypes.string,
  zip: PropTypes.string.isRequired
};

export default MapStatic;
