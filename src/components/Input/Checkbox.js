import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';

import { Label } from '../Input';

const handleChange = (input, option, event) => {
  const newValue = [...input.value];

  event.target.checked
    ? newValue.push(option.value)
    : newValue.splice(newValue.indexOf(option.value), 1);

  return input.onChange(newValue);
};

const Checkbox = ({ input, option }) => {
  return (
    <Label value={option.label} description={option.description} inline>
      <input
        css={tw`mr-2`}
        type="checkbox"
        value={option.value}
        checked={input.value.includes(option.value)}
        onChange={event => handleChange(input, option, event)}
      />
    </Label>
  );
};

Checkbox.propTypes = {
  input: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired
};

export default Checkbox;
