import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';

const Warning = props => (
  <div css={tw`border border-yellow bg-yellow-lighter p-4 mb-4 text-sm`}>
    <span css={tw`block font-heading font-bold mb-4 uppercase`}>
      {props.heading}
    </span>
    {props.children}
  </div>
);

export default Warning;
