import React, { Component } from 'react';
import { InfoWindow, Map, Marker } from 'google-maps-react';
import 'styled-components/macro';
import tw from 'tailwind.macro';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  adjustMap = (mapProps, map) => {
    const { rows } = this.props;
    const bounds = new window.google.maps.LatLngBounds();

    rows.map(location => {
      return bounds.extend(
        new window.google.maps.LatLng(location.latitude, location.longitude)
      );
    });

    map.fitBounds(bounds);
  };

  render() {
    const { rows, singleMarker } = this.props;

    return (
      <Map
        google={window.google}
        initialCenter={
          singleMarker && {
            lat: rows[0].latitude,
            lng: rows[0].longitude
          }
        }
        zoom={singleMarker && 15}
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
          <span css={tw`font-bold`}>{this.state.selectedPlace.name}</span>
        </InfoWindow>
      </Map>
    );
  }
}

export default MapContainer;
