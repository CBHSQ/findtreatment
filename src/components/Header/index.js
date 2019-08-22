import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';

import HeaderHelpLine from './HeaderHelpLine';
import HeaderBanner from './HeaderBanner';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header css={tw`print:hidden`} role="banner">
      <div css={tw`bg-gray-lighter`}>
        <div css={tw`lg:relative lg:mx-auto max-w-full lg:max-w-5xl`}>
          <HeaderBanner />
          <HeaderHelpLine />
        </div>
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
