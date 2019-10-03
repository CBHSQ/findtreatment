import React, { Component } from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

import { toggleWarning } from '../actions/ui';
import { convertToSlug } from '../utils/misc';

class Warning extends Component {
  toggleWarning = () => {
    const { dispatch, heading } = this.props;
    const id = convertToSlug(heading);

    dispatch(toggleWarning(id));
  };

  render() {
    const { children, heading, isHidden } = this.props;
    return (
      <div css={tw`border border-yellow bg-yellow-lighter p-4 mb-4 text-sm`}>
        <button
          onClick={this.toggleWarning}
          css={tw`flex items-center justify-between w-full`}
          aria-expanded={!isHidden}
        >
          <span css={tw`font-heading font-bold uppercase flex items-center`}>
            <FontAwesomeIcon
              icon={faInfoCircle}
              css={tw`mr-2 text-yellow`}
              className="fa-lg"
            />
            {heading}
          </span>
          <div css={tw`flex-none`}>
            <FontAwesomeIcon
              icon={isHidden ? faAngleDown : faAngleUp}
              css={tw`text-gray fill-current w-4 h-4`}
            />
          </div>
        </button>
        {!isHidden && (
          <div css={tw`mt-4`} className="warning-content">
            {children}
          </div>
        )}
      </div>
    );
  }
}

Warning.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired
};

const mapStateToProps = ({ ui }, ownProps) => {
  const id = convertToSlug(ownProps.heading);

  return {
    isHidden: ui.warningIds.includes(id)
  };
};

export default connect(mapStateToProps)(Warning);
