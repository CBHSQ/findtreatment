import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const NoResults = () => {
  return (
    <div css={tw`shadow border rounded p-6 text-center mb-6`}>
      <h2 css={tw`mb-6`}>
        <span css={tw`block font-bold text-3xl`}>This search didn't find any providers near you.</span>Try expanding your search by applying less filters, like your ZIP code and the type of treatment you need.
      </h2>
      <div css={tw`max-w-md mx-auto`}>
        <p css={tw`mb-6`}>
          If you need assistance, our national helpline is available 24/7 and can assist you with treatment referrals and information. Call <a href="tel:+1-800-662-4357">+1-800-662-HELP (4357)</a> to speak to someone.
        </p>
      </div>
    </div>
  );
};

export default NoResults;
