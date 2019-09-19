import React, { Component } from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../Input';

export class FilterToggle extends Component {
  handleReset = () => {
    const { dispatch } = this.props;

    dispatch(reset('filters'));
  };

  render() {
    const { filtersHidden, loading, toggleFilters } = this.props;
    return (
      <div css={tw`mb-4`}>
        {filtersHidden && !loading && (
          <Button primary css={tw`w-full text-xl`} onClick={toggleFilters}>
            <FontAwesomeIcon icon={faSlidersH} css={tw`mr-1`} rotation={90} />
            Filters
          </Button>
        )}
        {!filtersHidden && (
          <div css={tw`relative`}>
            <h2 css={tw`text-lg font-heading font-bold uppercase text-center`}>
              Filters
            </h2>
            <Button
              link
              css={tw`absolute top-0 right-0 mr-4`}
              onClick={this.handleReset}
            >
              Clear all
            </Button>
          </div>
        )}
      </div>
    );
  }
}

FilterToggle.propTypes = {
  filtersHidden: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  toggleFilters: PropTypes.func.isRequired
};

export default connect()(FilterToggle);
