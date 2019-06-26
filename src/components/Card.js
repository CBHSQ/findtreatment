import React from 'react';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
          <span css={tw`font-semibold`}>Phone:</span>{' '}
          <a href={`tel:${phone}`} css={tw``}>
            {phone}
          </a>
        </p>
        {website !== 'http://' && (
          <p>
            <span css={tw`font-semibold`}>Website:</span>{' '}
            <a href={website} css={tw`text-blue-700 hover:text-blue-800`}>
              {website}
            </a>
          </p>
        )}
      </div>
      <p css={tw`mb-4`}>
        <span css={tw`font-semibold`}>Type of care:</span>{' '}
        <span>{services[0].f3}</span>
      </p>

      <Link
        to={{
          pathname: '/details',
          state: {
            ...props
          }
        }}
      >
        <button
          css={tw`w-full lg:w-auto bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center justify-center lg:justify-start`}
        >
          View provider details
        </button>
      </Link>
    </li>
  );
};

export default Card;
