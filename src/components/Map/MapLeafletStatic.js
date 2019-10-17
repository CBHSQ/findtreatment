import React, { Component } from 'react';
import { Map, WMSTileLayer, Marker } from 'react-leaflet';
import { OutboundLink } from 'react-ga';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import 'leaflet/dist/leaflet.css';
import placeholder from '../../images/placeholder.png';
import { formatMiles, googleMapUrl } from '../../utils/misc';

export default class MapLeafletStatic extends Component {
  state = {
    imageLoaded: false
  };

  setImageLoaded = () => {
    this.setState({ imageLoaded: true });
  };

  render() {
    const { address, name1, latitude, longitude, miles } = this.props;
    const { imageLoaded } = this.state;
    const position = [latitude, longitude];
    const zoom = 15;
    return (
      <OutboundLink
        eventLabel="Driving directions link from card thumbnail image"
        to={googleMapUrl(address)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Driving directions for ${name1}`}
      >
        <Map
          center={position}
          zoom={zoom}
          style={{ height: '80%' }}
          zoomControl={false}
          attributionControl={false}
          dragging={false}
          doubleClickZoom={false}
          boxZoom={false}
          keyboard={false}
          scrollWheelZoom={false}
          touchZoom={false}
        >
          <WMSTileLayer
            layers="0"
            url="https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer"
            onLoad={this.setImageLoaded}
          />
          <Marker position={position}></Marker>
        </Map>
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
