import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setSRMessage } from '../actions/ui';

export const AppHelmet = ({ focusTarget, location, setSRMessage }) => (
  <Helmet
    titleTemplate={`%s | ${process.env.REACT_APP_SITE_TITLE}`}
    defaultTitle={process.env.REACT_APP_SITE_TITLE}
    onChangeClientState={newState => {
      setSRMessage(newState.title);
      const el = focusTarget.current;
      el.focus();
      el.scrollIntoView();
    }}
  >
    <title>{process.env.REACT_APP_SITE_TITLE}</title>
    <meta property="og:title" content={process.env.REACT_APP_SITE_TITLE} />
    <meta
      name="description"
      content="Find state-licensed treatment near you for addiction and substance use disorder."
    />
    <meta
      property="og:description"
      content="Find state-licensed treatment near you for addiction and substance use disorder."
    />
    <meta
      property="og:url"
      content={process.env.PUBLIC_URL + location.pathname}
    />
    <meta
      property="og:image"
      content={`${process.env.PUBLIC_URL}/thumbnail.png`}
    />
    <meta property="og:site_name" content={process.env.REACT_APP_SITE_TITLE} />
  </Helmet>
);

AppHelmet.propTypes = {
  focusTarget: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
  setSRMessage: PropTypes.func.isRequired
};

const mapDispatchToProps = { setSRMessage };

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AppHelmet)
);
