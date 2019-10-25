import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import OutboundLink from '../OutboundLink';

import placeholder from '../../images/placeholder.png';
import { GOOGLE_MAP_STATIC_URL } from '../../utils/constants';
import { formatMiles, googleMapUrl } from '../../utils/misc';

export class MapStatic extends Component {
  state = {
    imageLoaded: false
  };

  setImageLoaded = () => {
    this.setState({ imageLoaded: true });
  };

  render() {
    const { address, name1, latitude, longitude, miles } = this.props;
    const { imageLoaded } = this.state;

    return (
      <OutboundLink
        eventLabel="Driving directions link from card thumbnail image"
        to={googleMapUrl(address)}
        aria-label={`Driving directions for ${name1}`}
      >
        <img
          src={`${GOOGLE_MAP_STATIC_URL}?zoom=15&size=140x113&markers=size:small%7C${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
          alt={`Google map for ${name1}`}
          css={tw`w-full`}
          style={{ display: imageLoaded || 'none' }}
          onLoad={this.setImageLoaded}
        />
        {imageLoaded || (
          <img
            src={placeholder}
            css={tw`w-full`}
            alt={`Placeholder map for ${name1}`}
          />
        )}
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
