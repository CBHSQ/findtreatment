import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';

import HeaderBeta from './HeaderBeta';
import HeaderHelpLine from './HeaderHelpLine';
import HeaderBanner from './HeaderBanner';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <div css={tw`print:hidden`}>
      <HeaderBeta />
      <div css={tw`bg-gray-200`}>
        <div css={tw`lg:relative lg:mx-auto max-w-full lg:max-w-5xl`}>
          <HeaderBanner />
          <HeaderHelpLine />
        </div>
      </div>
      <HeaderNav />
    </div>
  );
};

export default Header;
