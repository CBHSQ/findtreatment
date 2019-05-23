import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Results extends Component {
  state = {
    locations: this.props.location.state.locations || {}
  };

  render() {
    const { locations } = this.state;
    return (
      <ol>
        {Object.keys(locations).length > 0 &&
          Object.keys(locations).map(result => (
            <li key={locations[result].frid}>{locations[result].name1}</li>
          ))}
      </ol>
    );
  }
}

export default withRouter(Results);
