import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div css={tw`max-w-3xl mx-auto p-6 mb-6`}>
      <h2 css={tw`text-3xl font-bold text-center mb-10`}>
        This page isn’t here, but we can get you help.
      </h2>
      <div css={tw`mx-auto`}>
        <p css={tw`text-xl mb-6`}>
          Our national helpline is available 24/7 and can assist you with
          treatment referrals and information.{' '}
          <span css={tw`font-bold`}>
            Call 1-800-662-HELP (4357) to speak with someone.
          </span>
        </p>
        <ul css={tw`list-disc list-inside`}>
          <li css={tw`mb-2`}>
            <Link to="/">Find treatment near you.</Link> Our locator includes
            licensed facilities in every state.
          </li>
          <li css={tw`mb-2`}>Learn about different types of treatment.</li>
          <li css={tw`mb-2`}>
            Understand what happens in treatment, including finding quality care
            and what questions to ask providers and insurance.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NoMatch;
