import React, { Component } from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { connect } from 'react-redux';
import ResultsList from './ResultsList';
import Search from './Search';
import MapContainer from './MapContainer';

export class Results extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { loading, data } = this.props;
    const { rows } = data;
    const hasResults = rows && rows.length > 0;

    return (
      <div className="container">
        <div css={tw`flex flex-wrap -mx-6`}>
          <div css={tw`w-full lg:w-3/5 px-6 mb-6 lg:mb-0`}>
            <ResultsList loading={loading} data={data} />
          </div>
          <div css={tw`w-full lg:w-2/5 px-6 mb-6`}>
            <h2 css={tw`mb-6`}>Filters</h2>
            <Search layout="Filter" css={tw`mb-6`} />
            {hasResults && (
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

const mapStateToProps = ({ locations }) => {
  const { loading, data } = locations;

  return {
    loading,
    data
  };
};

export default connect(mapStateToProps)(Results);
