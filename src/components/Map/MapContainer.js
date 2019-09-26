import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { InfoWindow, Map, Marker } from 'google-maps-react';

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

  onReady = (_, map) => {
    // Remove google map iframe
    window.google.maps.event.addListenerOnce(map, 'idle', () => {
      document.getElementsByTagName('iframe')[0].remove();
    });
  };

  render() {
    const { latitude, longitude, name1 } = this.props;

    return (
      <Map
        google={window.google}
        initialCenter={{
          lat: latitude,
          lng: longitude
        }}
        zoom={12}
        style={mapStyles}
        fullscreenControl={false}
        mapTypeControl={false}
        streetViewControl={false}
        onReady={this.onReady}
        onClick={this.onMapClicked}
      >
        <Marker name={name1} onClick={this.onMarkerClick} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <span className="infowindow__heading" css={tw`font-bold`}>
              {this.state.selectedPlace.name}
            </span>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

MapContainer.propTypes = {
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  name1: PropTypes.string.isRequired
};

export default MapContainer;
