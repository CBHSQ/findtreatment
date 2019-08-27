import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const Button = styled(({ as, children, primary, outline, link, ...props }) =>
  as ? (
    <Button as={as} {...props}>
      {children}
    </Button>
  ) : (
    <button {...props}>{children}</button>
  )
)`
  ${tw`font-bold font-heading md:font-sans text-2xl md:text-lg py-2 px-4 rounded inline-flex items-center justify-center`}

  ${props =>
    props.primary &&
    tw`bg-blue hover:bg-blue border border-blue text-white hover:text-white`}
    
  ${props => props.outline && tw`font-normal text-blue border border-blue`}

  ${props => props.link && tw`text-blue hover:text-blue font-normal p-0`}
`;

export default Button;
