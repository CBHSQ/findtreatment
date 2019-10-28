import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../images/logo.svg';

import HeaderBeta from './HeaderBeta';
import HeaderBanner from './HeaderBanner';
import HeaderHelpLine from './HeaderHelpLine';
import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header css={tw`print:hidden`} role="banner">
      <HeaderBeta />
      <HeaderBanner />
      <div className="container" css={tw`py-4 lg:py-0`}>
        <div css={tw`w-full flex flex-wrap justify-between`}>
          <div css={tw`lg:mt-4`}>
            <Link
              to="/"
              css={tw`font-semibold text-2xl tracking-tight`}
              aria-label="FindTreatment.gov"
            >
              <Logo aria-hidden="true" />
            </Link>
          </div>
          <div css={tw`hidden lg:block`}>
            <HeaderHelpLine />
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
