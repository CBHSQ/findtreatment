import React, { Component } from 'react';
import { Map, WMSTileLayer, Marker } from 'react-leaflet';

export default class MapLeafletStatic extends Component {
  render() {
    const { address, name1, latitude, longitude, miles } = this.props;
    const position = [latitude, longitude];
    const zoom = 16;
    return (
      <Map
        center={position}
        zoom={zoom}
        style={{ height: '150px' }}
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
        />
        <Marker position={position}></Marker>
      </Map>
    );
  }
}
