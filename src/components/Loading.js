import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import { withTheme } from 'styled-components';
import 'styled-components/macro';
import { ChasingDots } from 'styled-spinkit';

export const Loading = ({ theme }) => (
  <div css={tw`text-center`}>
    <ChasingDots size="64" color={theme.colors.teal.default} />
    <h2 css={tw`font-light italic text-gray`}>Loading results...</h2>
  </div>
);

Loading.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(Loading);
