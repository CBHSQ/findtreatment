import React from 'react';
import { Helmet } from 'react-helmet';

import Error from './Error';

const NoMatch = () => (
  <>
    <Helmet>
      <meta property="og:url" content={process.env.REACT_APP_SITE_DOMAIN} />
    </Helmet>
    <Error
      title="Not found"
      headerText="This page isn’t here, but we can get you help."
      description="SAMHSA's national helpline is available 24/7 and can assist you with treatment referrals and information."
    />
  </>
);

export default NoMatch;
