import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPhone } from '@fortawesome/free-solid-svg-icons';

import { linkToFacility, removeHttp } from '../utils/misc';

import MapStatic from './Map/MapStatic';

const StyledList = styled.ul`
  li:not(:last-child):after {
    content: ', ';
  }
`;

const renderService = (services, key) => {
  if (!services[key]) {
    return;
  }

  return (
    <div css={tw`flex text-sm mb-1`}>
      <FontAwesomeIcon
        icon={faCheck}
        css={tw`text-green mt-1 fill-current w-4 h-4 mr-2 flex-none`}
      />
      <StyledList>
        <span css={tw`font-bold inline`}>{services[key].name}: </span>
        {services[key].values.map((value, index) => (
          <li key={index} css={tw`inline`}>
            <span>{value}</span>
          </li>
        ))}
      </StyledList>
    </div>
  );
};

const Card = props => {
  const {
    frid,
    name1,
    street1,
    street2,
    city,
    state,
    zip,
    latitude,
    longitude,
    miles
  } = props;

  return (
    <li css={tw`bg-white shadow border-t border-gray-lighter rounded mb-10`}>
      <div css={tw`px-6 py-4 bg-blue-light text-white rounded-t`}>
        <Link
          to={linkToFacility({ frid, latitude, longitude })}
          css={tw`flex justify-between items-center -mx-2 text-white `}
        >
          <h2 css={tw`font-heading font-bold text-xl px-2`}>
            {props.name1} {props.name2}
          </h2>
          <span css={tw`flex-none px-2`}>more info ›</span>
        </Link>
      </div>
      <div css={tw`flex flex-wrap -mb-4 -mx-2 p-6`}>
        <div css={tw`w-1/4 px-2`}>
          <MapStatic
            name1={name1}
            street1={street1}
            street2={street2}
            city={city}
            state={state}
            zip={zip}
            latitude={latitude}
            longitude={longitude}
            miles={miles}
          />
        </div>
        <div css={tw`w-3/4 px-2`}>
          <div css={tw`flex items-center`}>
            <FontAwesomeIcon
              icon={faPhone}
              css={tw`text-gray fill-current w-4 h-4 mr-2`}
            />
            <OutboundLink
              eventLabel="Facility phone link from card"
              to={`tel:${props.phone}`}
              css={tw`block text-gray-darkest text-lg`}
            >
              {props.phone}
            </OutboundLink>
          </div>
          {props.website !== 'http://' && (
            <div css={tw`truncate`}>
              <OutboundLink
                eventLabel="Facility website link from card"
                to={props.website}
                target="_blank"
                rel="noopener noreferrer"
                css={tw`ml-6`}
              >
                {removeHttp(props.website).toLowerCase()}
              </OutboundLink>
            </div>
          )}
          <address css={tw`not-italic mb-2 ml-6`}>
            {street1}
            {street2 && `, ${street2}`}, {city}, {state} {zip}
          </address>
          <div css={tw`text-sm`}>
            {renderService(props.services, 'TC')}
            {renderService(props.services, 'PAY')}
          </div>
        </div>
      </div>
    </li>
  );
};

Card.propTypes = {
  frid: PropTypes.string.isRequired,
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string,
  street1: PropTypes.string.isRequired,
  street2: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  services: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string
};

export default Card;
