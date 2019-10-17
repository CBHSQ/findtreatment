import React, { Component } from 'react';
import { Map, WMSTileLayer, Marker, Popup } from 'react-leaflet';
import tw from 'tailwind.macro';

import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

// Resetting the path for the default icon
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const mapStyles = {
  width: '100%',
  height: '100%'
};

export default class MapLeafletContainer extends Component {
  render() {
    const { name1, latitude, longitude } = this.props;
    const position = [latitude, longitude];
    const zoom = 15;
    return (
      <Map center={position} zoom={zoom} style={mapStyles}>
        <WMSTileLayer
          layers="0"
          url="https://basemap.nationalmap.gov/arcgis/services/USGSTopo/MapServer/WMSServer"
          attribution="USGS The National Map"
        />
        <Marker position={position}>
          <Popup>
            <div>
              <span className="infowindow__heading" css={tw`font-bold`}>
                {name1}
              </span>
            </div>
          </Popup>
        </Marker>
      </Map>
    );
  }
}
