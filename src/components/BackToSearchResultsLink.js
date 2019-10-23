import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { Link } from 'react-router-dom';

const BackToSearchResultsLink = () => (
  <div css={tw`bg-gray-lightest border-t border-b border-gray-lighter`}>
    <div className="container" css={tw`py-5`}>
      <Link
        className="back-link"
        to="/results"
        css={tw`print:hidden font-semibold`}
      >
        ❮ Back to search results
      </Link>
    </div>
  </div>
);
export default BackToSearchResultsLink;
