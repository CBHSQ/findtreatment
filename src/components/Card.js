import React from 'react';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

const Card = props => {
  const {
    name1,
    name2,
    miles,
    street1,
    street2,
    city,
    state,
    zip,
    services,
    phone,
    website
  } = props;

  return (
    <li css={tw`shadow border rounded p-6 mb-6`}>
      <div css={tw`flex justify-between`}>
        <Link
          css={tw`text-blue-700 hover:text-blue-800`}
          to={{
            pathname: '/details',
            state: {
              ...props
            }
          }}
        >
          <h2 css={tw`font-bold mb-2`}>
            {name1}
            {name2 && <span css={tw`block text-lg font-light`}>{name2}</span>}
          </h2>
        </Link>
        <span css={tw`text-gray-500`}>{miles} miles</span>
      </div>
      <div css={tw`text-gray-600 mb-4`}>
        <FontAwesomeIcon icon={faMapMarkerAlt} css={tw`text-gray-400 mr-1`} />
        {street1}, {street2 ? street2 + ', ' : ''}
        {city}, {state} {zip}
      </div>
      <div css={tw`mb-4`}>
        <p>
          Type of care: <span css={tw`font-semibold`}>{services[0].f3}</span>
        </p>
      </div>
      <div css={tw`lg:flex items-center`}>
        <a
          css={tw`w-full lg:w-auto bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center mr-2 mb-2 lg:mb-0 justify-center lg:justify-start`}
          href={`tel:${phone}`}
        >
          <FontAwesomeIcon icon={faPhone} css={tw`text-gray-200 mr-2`} />
          {phone}
        </a>

        {website && (
          <a
            href={website}
            css={tw`w-full lg:w-auto bg-gray-300 hover:bg-gray-400 font-semibold py-2 px-4 rounded inline-flex items-center justify-center lg:justify-start`}
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              css={tw`text-gray-700 mr-2`}
            />
            Visit website
          </a>
        )}
      </div>
    </li>
  );
};

export default Card;
