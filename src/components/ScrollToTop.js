import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { TOP_ID } from '../utils/constants';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { pathname, hash } = this.props.location;

    if (pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }

    if ([`#${TOP_ID}`, '#main'].includes(hash)) {
      document.getElementById(hash.slice(1)).focus();
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
