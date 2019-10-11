import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { OutboundLink } from 'react-ga';

import { GOOGLE_MAP_STATIC_URL } from '../../utils/constants';
import { formatMiles, googleMapUrl } from '../../utils/misc';
import placeholder from '../../images/placeholder.png';

export class MapStatic extends Component {
  render() {
    const { address, name1, latitude, longitude, miles } = this.props;

    return (
      <OutboundLink
        eventLabel="Driving directions link from card thumbnail image"
        to={googleMapUrl(address)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Driving directions for ${name1}`}
      >
        <img
          src={`${GOOGLE_MAP_STATIC_URL}?zoom=15&size=140x113&markers=size:small%7C${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
          alt={`Google map for ${name1}`}
          css={tw`w-full`}
          onError={e => (e.target.src = placeholder)}
        />
        <div
          css={tw`bg-blue-lighter p-1 text-center text-sm text-gray-dark`}
          className="map-static-miles"
        >
          {formatMiles(miles)}
        </div>
      </OutboundLink>
    );
  }
}

MapStatic.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    street1: PropTypes.string.isRequired,
    street2: PropTypes.string,
    zip: PropTypes.string.isRequired
  }).isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  miles: PropTypes.number.isRequired,
  name1: PropTypes.string.isRequired
};

export default MapStatic;
