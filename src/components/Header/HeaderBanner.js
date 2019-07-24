import React from 'react';
import tw from 'tailwind.macro';

import flag from '../../images/us_flag_small.png';

const StyledBanner = tw.div`mx-auto flex items-center py-1 text-xs sm:text-sm leading-tight`;

const HeaderBanner = () => (
  <StyledBanner className="container">
    <img src={flag} alt="U.S. Flag" css={tw`mr-2`} />
    An official website of the United States government
  </StyledBanner>
);

export default HeaderBanner;
