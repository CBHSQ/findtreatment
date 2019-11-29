import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import OutboundLink from './OutboundLink';
import { Helmet } from 'react-helmet';

import { HELPLINE_LINK, HELPLINE_TEXT } from '../utils/constants';

import { Button } from './Input';

class Error extends Component {
  headerRef = React.createRef();

  componentDidMount() {
    this.headerRef.current.focus();
  }

  render() {
    const { title, headerText, description } = this.props;

    return (
      <div css={tw`mx-auto p-6 mb-6 text-center`}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <h1
          css={tw`text-3xl font-bold mb-10`}
          ref={this.headerRef}
          tabIndex="-1"
        >
          {headerText}
        </h1>
        <div css={tw`max-w-xl mx-auto`}>
          <p css={tw`text-xl mb-6`}>{description}</p>
          <Button
            eventLabel={`Helpline link from ${title} page`}
            to={`tel:${HELPLINE_LINK}`}
            as={OutboundLink}
            primary
          >
            <FontAwesomeIcon icon={faPhone} css={tw`mr-2`} className="fa-lg" />
            {HELPLINE_TEXT}
          </Button>
        </div>
      </div>
    );
  }
}

Error.propTypes = {
  title: PropTypes.string,
  headerText: PropTypes.string,
  description: PropTypes.string
};

Error.defaultProps = {
  title: 'Error',
  headerText: 'Something is wrong on our side.',
  description: `We're having technical issues right now. The problem should be fixed soon, and in the meantime SAMHSA's national helpline is available 24/7 and can assist you with treatment referrals and information.`
};

export default Error;
