import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { Link } from 'react-router-dom';

import Warning from '../Warning';

const ResultsWarning = () => (
  <Warning heading="Before you call">
    <ul css={tw`pl-4 ml-4 list-outside list-disc`}>
      <li css={tw`mb-2`}>
        Call a facility before you visit to make sure they have the services you
        need.{' '}
        <Link
          to="/content/treatment-options/calling-a-facility"
          css={tw`underline text-gray-darkest`}
        >
          What to expect when you call
        </Link>
        .
      </li>
      <li>
        Not sure what you need?{' '}
        <Link
          to="/content/treatment-options/types-of-treatment"
          css={tw`underline text-gray-darkest`}
        >
          Learn more about different types of treatment
        </Link>
        .
      </li>
    </ul>
  </Warning>
);

export default ResultsWarning;
