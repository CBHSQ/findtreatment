import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

export const SRAnnouncements = ({ srMessage }) => (
  <div
    className="sr-only"
    role="status"
    aria-live="assertive"
    aria-atomic="true"
  >
    {srMessage ? srMessage : ''}
  </div>
);

SRAnnouncements.propTypes = {
  srMessage: PropTypes.string
};

const mapStateToProps = state => ({
  srMessage: state.ui.srMessage
});

export default connect(mapStateToProps)(SRAnnouncements);
