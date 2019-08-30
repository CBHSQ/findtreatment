import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker } from 'google-maps-react';
import DOMInfoWindow from './DOMInfoWindow';
import InfoWindowText from './InfoWindowText';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const initialState = {
  showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {
    details: {}
  }
};

export class MapContainer extends Component {
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

  onReady = (_, map) => {
    // Add title to google map iframe
    window.google.maps.event.addListenerOnce(map, 'idle', () => {
      document.getElementsByTagName('iframe')[0].title = 'Google Maps';
    });
  };

  hasMultipleResults() {
    const { rows, singleMarker } = this.props;

    return rows.length > 1 && !singleMarker;
  }

  render() {
    const { frid, latitude, longitude, name1 } = this.props;
    const { activeMarker, showingInfoWindow, selectedPlace } = this.state;

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
        <Marker
          key={frid}
          name={name1}
          details={this.props}
          position={new window.google.maps.LatLng(latitude, longitude)}
          onClick={this.onMarkerClick}
        />

        <DOMInfoWindow marker={activeMarker} visible={showingInfoWindow}>
          <InfoWindowText selectedPlace={selectedPlace} />
        </DOMInfoWindow>
      </Map>
    );
  }
}

MapContainer.propTypes = {
  frid: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  name1: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default MapContainer;
