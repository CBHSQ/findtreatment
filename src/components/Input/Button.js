import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { theme } from '../../tailwind.js';

const Button = styled(({ as, children, primary, outline, link, ...props }) =>
  as ? (
    <Button as={as} {...props}>
      {children}
    </Button>
  ) : (
    <button {...props}>{children}</button>
  )
)`
  ${tw`font-bold font-heading md:font-sans py-2 px-4 rounded inline-flex items-center justify-center`}

  ${props =>
    props.primary &&
    tw`bg-blue hover:bg-blue border border-blue text-white hover:text-white`}

  ${props => props.outline && tw`font-normal text-blue border border-blue`}

  ${props =>
    props.gradient && {
      ...tw`shadow font-normal text-gray-darker`,
      background: `linear-gradient(${theme.colors.white},${theme.colors.gray.lightest})`
    }}


  ${props => props.link && tw`text-blue hover:text-blue font-normal p-0`}
`;

export default Button;
