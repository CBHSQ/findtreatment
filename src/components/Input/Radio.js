import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import { theme } from '../../tailwind.js';
import { Label } from '../Input';

const Input = styled.input`
  ${tw`mt-px mr-2 flex-none`}

  transform: scale(1.25);
  @media (min-width: ${theme.screens.sm}) {
    transform: scale(1);
  }
`;

const Radio = ({ input, option }) => {
  return (
    <Label labelText={option.label} description={option.description} inline>
      <Input
        type="radio"
        {...input}
        value={option.value}
        checked={option.value === input.value}
      />
    </Label>
  );
};

Radio.propTypes = {
  input: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired
};

export default Radio;
