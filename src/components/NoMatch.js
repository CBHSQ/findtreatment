import React from 'react';
import Error from './Error';

const NoMatch = () => (
  <Error
    title="Not found"
    headerText="This page isn’t here, but we can get you help."
    description="SAMHSA's national helpline is available 24/7 and can assist you with treatment referrals and information."
  />
);

export default NoMatch;
