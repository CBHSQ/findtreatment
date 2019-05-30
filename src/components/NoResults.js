import React from "react";
import "styled-components/macro";
import tw from "tailwind.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const NoResults = () => {
  return (
    <div css={tw`shadow border rounded p-6 text-center`}>
      <h2 css={tw`mb-6`}>
        <span css={tw`block font-bold text-3xl`}>Oops!</span>We couldn't find
        any providers near you.
      </h2>
      <div css={tw`max-w-md mx-auto`}>
        <p css={tw`mb-6`}>
          Please try expanding your search criteria. If you need assistance our
          national helpline is available 24/7 and can assist you with treatment
          referrals and information.
        </p>

        <a
          href="tel:18006624357"
          css={tw`bg-blue-500 hover:bg-blue-700 text-white font-semibold p-4 rounded inline-flex items-center justify-center`}
        >
          <FontAwesomeIcon icon={faPhone} css={tw`mr-2`} className="fa-lg" />
          1-800-662-HELP (4357)
        </a>
      </div>
    </div>
  );
};

export default NoResults;
