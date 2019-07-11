import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import flag from '../images/us_flag_small.png';

const Banner = () => {
  return (
    <div
      className="container"
      css={tw`mx-auto flex items-center py-1 text-xs sm:text-sm leading-tight`}
    >
      <img src={flag} alt="U.S. Flag" css={tw`mr-2`} />
      An official website of the United States government
    </div>
  );
};

export default Banner;
