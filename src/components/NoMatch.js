import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Error from './Error';
import Loading from './Loading';

// The runaround with setting mounted = true is necessary due to errors in React's hydration.
// If this is not done, the Error component is rendered INSIDE the Loading component, causing
// the page to render incorrectly.
class NoMatch extends Component {
  state = {
    mounted: false
  };

  componentDidMount() {
    const { isReactSnap } = this.props;
    if (!isReactSnap) {
      this.setState({ mounted: true });
    }
  }

  render() {
    const { isReactSnap } = this.props;
    const { mounted } = this.state;

    return (
      <>
        <Helmet>
          <meta property="og:url" content={process.env.REACT_APP_SITE_DOMAIN} />
        </Helmet>

        {isReactSnap || !mounted ? (
          <Loading />
        ) : (
          <Error
            title="Not found"
            headerText="This page isn’t here, but we can get you help."
            description="SAMHSA's national helpline is available 24/7 and can assist you with treatment referrals and information."
          />
        )}
      </>
    );
  }
}

NoMatch.propTypes = {
  isReactSnap: PropTypes.bool.isRequired
};

NoMatch.defaultProps = {
  isReactSnap: false
};

export default NoMatch;
