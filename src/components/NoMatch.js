import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import Loading from './Loading';

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

    if (isReactSnap || !mounted) {
      return <Loading />;
    }

    return (
      <Error
        title="Not found"
        headerText="This page isn’t here, but we can get you help."
        description="SAMHSA's national helpline is available 24/7 and can assist you with treatment referrals and information."
      />
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
