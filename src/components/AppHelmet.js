import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSRMessage } from '../actions/ui';

export const AppHelmet = ({ focusTarget, setSRMessage }) => (
  <Helmet
    titleTemplate={`%s | ${process.env.REACT_APP_SITE_TITLE}`}
    defaultTitle={process.env.REACT_APP_SITE_TITLE}
    onChangeClientState={newState => {
      setSRMessage(newState.title);
      focusTarget.current.focus();
      window.scrollTo(0, 0);
    }}
  />
);

AppHelmet.propTypes = {
  focusTarget: PropTypes.any.isRequired,
  setSRMessage: PropTypes.func.isRequired
};

const mapDispatchToProps = { setSRMessage };

export default connect(
  null,
  mapDispatchToProps
)(AppHelmet);
