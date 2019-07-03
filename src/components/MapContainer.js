import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InfoWindow, Map, Marker } from 'google-maps-react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const defaultZoomLevel = 15;
const initialState = {
  showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {}
};

const propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      frid: PropTypes.string,
      latitude: PropTypes.string,
      longitude: PropTypes.string,
      name1: PropTypes.string
    })
  ).isRequired,
  singleMarker: PropTypes.bool
};

const MarkerText = styled.span`
  ${tw`font-bold`}
`;

export class MapContainer extends Component {
  static propTypes = propTypes;
  static defaultProps = {
    singleMarker: false
  };

  state = initialState;

  onMarkerClick = (props, marker, _) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState(initialState);
    }
  };

  adjustMap = (_, map) => {
    const { rows } = this.props;
    const bounds = new window.google.maps.LatLngBounds();

    rows.forEach(location => {
      bounds.extend(
        new window.google.maps.LatLng(location.latitude, location.longitude)
      );
    });

    map.fitBounds(bounds);
  };

  getInitialCenter() {
    if (!this.props.singleMarker) {
      return;
    }

    const { latitude, longitude } = this.props.rows[0];

    return {
      lat: latitude,
      lng: longitude
    };
  }

  getInitialZoom() {
    return this.props.singleMarker ? defaultZoomLevel : undefined;
  }

  render() {
    const { rows, singleMarker } = this.props;

    return (
      <Map
        google={window.google}
        initialCenter={this.getInitialCenter()}
        zoom={this.getInitialZoom()}
        style={mapStyles}
        fullscreenControl={false}
        mapTypeControl={false}
        streetViewControl={false}
        onReady={!singleMarker && this.adjustMap}
        onClick={this.onMapClicked}
      >
        {rows.map(location => {
          const { latitude, longitude } = location;
          return (
            <Marker
              key={location.frid}
              name={location.name1}
              position={new window.google.maps.LatLng(latitude, longitude)}
              onClick={this.onMarkerClick}
            />
          );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <MarkerText>{this.state.selectedPlace.name}</MarkerText>
        </InfoWindow>
      </Map>
    );
  }
}

export default MapContainer;
