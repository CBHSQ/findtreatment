import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as API from "./utils/api";

class Search extends Component {
  state = {
    query: "",
    locations: {}
  };

  handleSubmit = e => {
    e.preventDefault();

    API.search(this.state.query).then(locations => {
      this.props.history.push({
        pathname: "/results",
        state: { locations }
      });
    });
  };

  updateQuery = value => {
    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search by zip code"
            value={query}
            onChange={event => this.updateQuery(event.target.value)}
          />
          <button type="submit">Find</button>
        </form>
      </>
    );
  }
}

export default withRouter(Search);
