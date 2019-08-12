import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker } from 'google-maps-react';
import DOMInfoWindow from './DOMInfoWindow';
import InfoWindowText from './InfoWindowText';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const defaultZoomLevel = 15;
const initialState = {
  showingInfoWindow: false,
  activeMarker: {},
  selectedPlace: {
    details: {}
  }
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

  onReady = (_, map) => {
    const { rows } = this.props;

    if (this.hasMultipleResults()) {
      const bounds = new window.google.maps.LatLngBounds();
      rows.forEach(location => {
        bounds.extend(
          new window.google.maps.LatLng(location.latitude, location.longitude)
        );
      });
      map.fitBounds(bounds);
    }

    // Add title to google map iframe
    window.google.maps.event.addListenerOnce(map, 'idle', () => {
      document.getElementsByTagName('iframe')[0].title = 'Google Maps';
    });
  };

  getInitialCenter() {
    if (this.hasMultipleResults()) {
      return;
    }

    const { latitude, longitude } = this.props.rows[0];

    return {
      lat: latitude,
      lng: longitude
    };
  }

  getInitialZoom() {
    return !this.hasMultipleResults() ? defaultZoomLevel : undefined;
  }

  hasMultipleResults() {
    const { rows, singleMarker } = this.props;

    return rows.length > 1 && !singleMarker;
  }

  render() {
    const { rows, singleMarker } = this.props;
    const { activeMarker, showingInfoWindow, selectedPlace } = this.state;

    return (
      <Map
        google={window.google}
        initialCenter={this.getInitialCenter()}
        zoom={this.getInitialZoom()}
        style={mapStyles}
        fullscreenControl={false}
        mapTypeControl={false}
        streetViewControl={false}
        onReady={this.onReady}
        onClick={this.onMapClicked}
      >
        {rows.map(location => {
          const { latitude, longitude } = location;
          return (
            <Marker
              key={location.frid}
              name={location.name1}
              details={location}
              position={new window.google.maps.LatLng(latitude, longitude)}
              onClick={this.onMarkerClick}
            />
          );
        })}
        <DOMInfoWindow marker={activeMarker} visible={showingInfoWindow}>
          <InfoWindowText
            selectedPlace={selectedPlace}
            singleMarker={singleMarker}
          />
        </DOMInfoWindow>
      </Map>
    );
  }
}

export default MapContainer;
