import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';

import { Label } from '../Input';

const Radio = ({ input, option }) => {
  return (
    <Label value={option.label} description={option.description} inline>
      <input
        css={tw`mr-2 flex-none`}
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
