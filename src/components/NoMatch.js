import React from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const NoMatch = ({ isStatic }) => (
  <Error
    title="Not found"
    headerText={
      isStatic ? 'Loading...' : 'This page isn’t here, but we can get you help.'
    }
    description="SAMHSA's national helpline is available 24/7 and can assist you with treatment referrals and information."
  />
);

NoMatch.propTypes = {
  isStatic: PropTypes.bool.isRequired
};

NoMatch.defaultProps = {
  isStatic: false
};

export default NoMatch;
