import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { ChasingDots } from 'styled-spinkit';
import { theme } from '../tailwind.js';

const Loading = () => {
  return (
    <div css={tw`mb-10 text-center`}>
      <ChasingDots size="64" color={theme.extend.colors.teal[100]} />
      <h2 css={tw`font-light italic text-gray-700`}>Loading results...</h2>
    </div>
  );
};

export default Loading;
