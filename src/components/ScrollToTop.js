import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { TOP_ID } from '../utils/constants';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }

    if (this.props.location.hash === `#${TOP_ID}`) {
      document.getElementById(TOP_ID).focus();
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(ScrollToTop);
