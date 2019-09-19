import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { Link } from 'react-router-dom';

import Warning from './ResultsWarning';

const ResultsWarning = () => (
  <Warning heading="Before you call">
    <p>
      Before visiting a facility, call to make sure they have the services you
      need.{' '}
      <Link
        to="/content/treatment-options/calling-a-facility"
        css={tw`underline text-gray-darkest`}
      >
        What to expect when you call
      </Link>
      . Not sure what you need?{' '}
      <Link
        to="/content/treatment-options/types-of-treatment"
        css={tw`underline text-gray-darkest`}
      >
        Learn more about different types of treatment
      </Link>
      . All facilities are licensed by their states, and provide assessments.
    </p>
  </Warning>
);

export default ResultsWarning;
