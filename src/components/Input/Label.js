import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';

const Label = props => {
  return (
    <label
      htmlFor={props.name}
      css={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
    >
      {props.label}
    </label>
  );
};

export default Label;
