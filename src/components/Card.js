import React from "react";
import { Link } from "react-router-dom";
import "styled-components/macro";
import tw from "tailwind.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const Card = props => {
  return (
    <li css={tw`shadow border rounded p-6 mb-6`}>
      <div css={tw`flex justify-between`}>
        <h2 css={tw`font-bold mb-2`}>
          {props.location.name1}
          {props.location.name2 && (
            <span css={tw`block text-lg font-light`}>
              {props.location.name2}
            </span>
          )}
        </h2>
        <span css={tw`text-gray-500`}>{props.location.miles} miles</span>
      </div>
      <div css={tw`text-gray-600 mb-4`}>
        <FontAwesomeIcon icon={faMapMarkerAlt} css={tw`text-gray-400 mr-1`} />
        {props.location.street1},{" "}
        {props.location.street2 ? props.location.street2 + ", " : ""}
        {props.location.city}, {props.location.state} {props.location.zip}
      </div>
      <p css={tw`mb-4`}>
        Provider type:{" "}
        <span css={tw`font-semibold`}>
          {props.location.typeFacility === "SA"
            ? "Substance use"
            : "Mental health"}
        </span>
      </p>
      <div css={tw`flex items-center`}>
        <button
          css={tw`bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center mr-2`}
        >
          <FontAwesomeIcon icon={faPhone} css={tw`fill-current w-4 h-4 mr-2`} />
          <a href={`tel:${props.location.phone}`}>{props.location.phone}</a>
        </button>
        <Link to={`/details/${props.location.frid}`}>
          <button
            css={tw`bg-gray-300 hover:bg-gray-400 font-semibold py-2 px-4 rounded`}
          >
            Learn more
          </button>
        </Link>
      </div>
    </li>
  );
};

export default Card;
