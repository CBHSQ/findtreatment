import React from 'react';
import { PropTypes } from 'prop-types';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';

import { Button } from './Input';

const StyledButton = styled(Button)`
  ${tw`absolute bg-white left-0 p-2 underline`}
  top: -2.5rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    ${tw`top-0`}
    transition: all 0.2s ease-in-out;
  }
`;

const SkipNav = props => {
  return (
    <StyledButton link onClick={props.skipToMain}>
      Skip to main content
    </StyledButton>
  );
};

SkipNav.propTypes = {
  skipToMain: PropTypes.func.isRequired
};

export default SkipNav;
