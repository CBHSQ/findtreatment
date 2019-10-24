import React from 'react';
import PropTypes from 'prop-types';
import { OutboundLink as OL } from 'react-ga';

const mergeProps = ({ targetBlank, ...rest }) =>
  targetBlank && !rest.to.startsWith('tel:') && !rest.to.startsWith('email:')
    ? {
        ...rest,
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : rest;

const OutboundLink = props => <OL {...mergeProps(props)} />;

OutboundLink.propTypes = {
  ...OL.propTypes,
  targetBlank: PropTypes.bool
};

OutboundLink.defaultProps = {
  targetBlank: true
};

export default OutboundLink;
