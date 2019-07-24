import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { OutboundLink } from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Button from './Form/Button';
import { convertToSlug, hash } from '../utils/misc';

const pathForFacility = ({ frid, name1, params }) => {
  let slug = `${convertToSlug(name1)}-${hash(frid)}`;
  let query = [encodeURIComponent(params.sAddr)];
  if (params.limitValue) {
    query.push(encodeURIComponent(params.limitValue));
  }
  return [slug, query.join(':')].join('/');
};

const Card = props => {
  const {
    frid,
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
    website,
    params
  } = props;

  return (
    <li css={tw`shadow border rounded p-6 mb-6`}>
      <div css={tw`flex justify-between`}>
        <Link
          to={{
            pathname: `/details/${pathForFacility({ frid, name1, params })}`,
            state: {
              id: frid
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
        {street1}, {street2 && street2 + ', '}
        {city}, {state} {zip}
      </div>
      <div css={tw`mb-4`}>
        <p>
          <span css={tw`font-semibold`}>Phone:</span>{' '}
          <OutboundLink
            eventLabel="Facility phone link from card"
            to={`tel:${phone}`}
          >
            {phone}
          </OutboundLink>
        </p>
        {website !== 'http://' && (
          <p>
            <span css={tw`font-semibold`}>Website:</span>{' '}
            <OutboundLink
              eventLabel="Facility website link from card"
              to={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </OutboundLink>
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
            id: frid
          }
        }}
      >
        <Button primary>View provider details</Button>
      </Link>
    </li>
  );
};

Card.propTypes = {
  frid: PropTypes.string.isRequired,
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string,
  miles: PropTypes.number.isRequired,
  street1: PropTypes.string.isRequired,
  street2: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string
};

export default Card;
