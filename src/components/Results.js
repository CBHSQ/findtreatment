import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import axios from 'axios';
import API from '../utils/API';
import NoResults from './NoResults';
import Card from './Card';
import Pagination from './Pagination';
import Filter from './Filter';
import MapContainer from './MapContainer';

class Results extends Component {
  state = {
    count: 0,
    locations: []
  };

  componentDidMount() {
    this.updateLocations(this.props.query);
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    if (this.props.query !== prevProps.query) {
      this.updateLocations(this.props.query);
    }
  }

  updateLocations = query => {
    const params = new URLSearchParams();
    params.append('sType', 'SA');
    params.append('sAddr', '38.0685423,-78.48401660000002');
    params.append('pageSize', 10);
    params.append('page', 1);
    params.append('sort', 0);
    axios
      .post('http://localhost:9011/locator/listing', params)
      .then(response => {
        console.log(response);
        this.setState({
          count: response.data.recordCount,
          locations: response.data.rows
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { count, locations } = this.state;
    return (
      <div className="container">
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full lg:w-3/5 px-6 mb-6 lg:mb-0`}>
            <div css={tw`lg:flex lg:justify-between lg:items-baseline mb-6`}>
              <h1 css={tw`mb-2 lg:mb-0`}>
                Results{' '}
                <span css={tw`text-lg text-gray-600 font-light`}>
                  Treatment providers near you
                </span>
              </h1>
              {locations.length > 0 && (
                <span css={tw`block text-gray-500`}>
                  Showing 1-{locations.length} of {count}
                </span>
              )}
            </div>
            <ul css={tw``}>
              {locations.length > 0 ? (
                locations.map(result => (
                  <Card key={result.frid} location={result} />
                ))
              ) : (
                <NoResults />
              )}
            </ul>
            {locations.length > 0 && <Pagination />}
          </div>
          <div css={tw`w-full lg:w-2/5 px-6`}>
            <h2 css={tw`mb-6`}>Filters</h2>
            <Filter
              css={tw`mb-6`}
              query={this.props.query}
              handleInputChange={this.props.handleInputChange}
              updateLocations={this.updateLocations}
            />

            {locations.length > 0 && (
              <div css={tw`pt-6 border-t`}>
                <div css={tw`relative h-64 w-full mb-6`}>
                  <MapContainer />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Results;