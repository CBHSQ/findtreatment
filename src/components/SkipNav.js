import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { HashLink } from 'react-router-hash-link';

const StyledLink = styled(HashLink)`
  ${tw`absolute bg-white left-0 p-2 underline`}
  top: -2.5rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    ${tw`top-0`}
    transition: all 0.2s ease-in-out;
  }
`;

const SkipNav = () => {
  return <StyledLink to="#main">Skip to main content</StyledLink>;
};

export default SkipNav;
