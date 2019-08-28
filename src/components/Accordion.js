import React, { Component } from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

class Accordion extends Component {
  state = {
    hidden: false
  };

  toggleAccordion = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };

  render() {
    return (
      <>
        {this.props.children}
        <button
          className="filter-link"
          css={tw`mb-6`}
          onClick={this.toggleAccordion}
          type="button"
        >
          {this.state.hidden ? 'More' : 'Less'} filters
          <FontAwesomeIcon
            icon={this.state.hidden ? faAngleDown : faAngleUp}
            css={tw`text-blue-500 ml-1`}
          />
        </button>
      </>
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired
};

export default Accordion;
