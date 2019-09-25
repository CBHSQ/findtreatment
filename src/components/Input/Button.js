import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';

import { theme } from '../../tailwind.js';

const Button = styled(
  ({
    as,
    children,
    primary,
    secondary,
    outline,
    gradient,
    disabled,
    link,
    ...rest
  }) =>
    as ? (
      <Button as={as} disabled={disabled} {...rest}>
        {children}
      </Button>
    ) : (
      <button disabled={disabled} {...rest}>
        {children}
      </button>
    )
)`
  ${tw`font-semibold py-2 px-4 rounded inline-flex items-center justify-center`}

  ${props =>
    props.primary &&
    tw`bg-blue hover:bg-blue border border-blue text-white hover:text-white`}

  ${props =>
    props.secondary &&
    tw`bg-red hover:bg-red border border-red-dark text-white hover:text-white`}

  ${props => props.outline && tw`text-blue border border-blue`}

  ${props =>
    props.gradient && {
      ...tw`shadow text-gray-darker`,
      background: `linear-gradient(${theme.colors.white},${theme.colors.gray.lightest})`
    }}

  ${props => props.disabled && tw`opacity-75 cursor-not-allowed`}

  ${props => props.link && tw`text-blue hover:text-blue p-0`}
`;

Button.propTypes = {
  as: PropTypes.func,
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  gradient: PropTypes.bool,
  disabled: PropTypes.bool,
  link: PropTypes.bool
};

export default Button;
