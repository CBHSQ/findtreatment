import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { ChasingDots } from 'styled-spinkit';
import { theme } from '../tailwind.js';

const Loading = () => (
  <div css={tw`text-center`}>
    <ChasingDots size="64" color={theme.colors.teal.default} />
    <h2 css={tw`font-light italic text-gray`}>Loading results...</h2>
  </div>
);

export default Loading;
