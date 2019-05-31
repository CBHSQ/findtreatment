import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  render() {
    return <Map google={this.props.google} zoom={14} style={mapStyles} />;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDPni-q0MMWdPAGrlv7wS8AYgfmcGUo4as"
})(MapContainer);
