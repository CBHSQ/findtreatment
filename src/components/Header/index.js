import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';

import HeaderBanner from './HeaderBanner';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header css={tw`print:hidden`} role="banner">
      <HeaderBanner />
      <HeaderNav />
    </header>
  );
};

export default Header;
