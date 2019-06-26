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
    selectedPlace: {},
    bounds: null
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

  makeBounds = () => {
    const { rows } = this.props;
    const bounds = new window.google.maps.LatLngBounds();

    rows.map(location => {
      return bounds.extend({
        lat: +location.latitude,
        lng: +location.longitude
      });
    });

    this.setState({ bounds });
  };

  onReady = () => {
    this.makeBounds();
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
        bounds={!singleMarker && this.state.bounds}
        onReady={!singleMarker && this.onReady}
        onClick={this.onMapClicked}
      >
        {rows.map(location => {
          return (
            <Marker
              key={location.frid}
              name={location.name1}
              position={{ lat: location.latitude, lng: location.longitude }}
              onClick={this.onMarkerClick}
            />
          );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <span css={tw`font-bold`}>{this.state.selectedPlace.name}</span>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default MapContainer;
