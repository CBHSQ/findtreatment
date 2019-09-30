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
    window.google.maps.event.addListenerOnce(map, 'idle', () => {
      const iframe = document.getElementsByTagName('iframe')[0];
      iframe.title = 'Google Maps';
      iframe.setAttribute('tabindex', '-1');

      const innerDiv = document.getElementsByClassName('gm-style-pbc')[0];
      innerDiv.parentElement.removeAttribute('tabindex');

      const wrapper = document.getElementsByClassName('map-wrapper')[0];
      wrapper.setAttribute('tabindex', '0');
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
        className="map-wrapper"
        css={`
          &:focus {
            outline: rgba(77, 171, 47, 0.247) solid 5px;
            outline-offset: 2px;
          }
        `}
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
