import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPhone } from '@fortawesome/free-solid-svg-icons';

import { GOOGLE_MAP_STATIC_URL } from '../utils/constants';
import { linkToFacility, removeHttp } from '../utils/misc';

const StyledServices = styled.ul`
  ${tw`text-sm mb-1`}

  li {
    ${tw`inline`}

    &:not(:last-child):after {
      content: ', ';
    }
  }
`;

const StyledHeading = styled.div`
  ${tw`px-6 py-4 bg-blue-light text-white rounded-t`}
`;

const StyledCard = tw.li`bg-white shadow border-t border-gray-lighter rounded mb-10`;

const serviceIcons = {
  TC: 'Type of care',
  PAY: 'Payment options'
};

const renderService = (services, key) => {
  if (!services[key]) {
    return;
  }

  const { values } = services[key];

  return (
    <StyledServices>
      <div css={tw`flex`}>
        <FontAwesomeIcon
          icon={faCheck}
          css={tw`text-green mt-1 fill-current w-4 h-4 mr-2`}
        />
        <div>
          <span css={tw`font-bold inline`}>{serviceIcons[key]}: </span>
          {values.map((value, index) => (
            <li key={index}>
              <span>{value}</span>
            </li>
          ))}
        </div>
      </div>
    </StyledServices>
  );
};

const CardHeading = ({ frid, name1, name2, latitude, longitude }) => (
  <StyledHeading>
    <Link
      to={linkToFacility({ frid, latitude, longitude })}
      css={tw`flex justify-between items-center -mx-2 text-white `}
    >
      <h2 css={tw`font-heading font-bold text-xl px-2`}>
        {name1} {name2}
      </h2>
      <span css={tw`flex-none px-2`}>more info ›</span>
    </Link>
  </StyledHeading>
);

const CardDetails = props => {
  const {
    latitude,
    longitude,
    miles,
    name1,
    phone,
    website,
    services,
    street1,
    street2,
    city,
    state,
    zip
  } = props;

  return (
    <div css={tw`flex flex-wrap -mb-4 -mx-2`}>
      <div css={tw`w-1/4 px-2`}>
        <OutboundLink
          eventLabel="Driving directions link from card thumbnail image"
          to={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
            `${street1}, ${street2 && street2 + ','} ${city}, ${state} ${zip}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${GOOGLE_MAP_STATIC_URL}?zoom=15&size=140x113&markers=size:small%7C${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
            alt={`Google map for ${name1}`}
            css={tw`w-full`}
          />
        </OutboundLink>
        <div css={tw`bg-blue-lighter p-1 text-center text-sm text-gray`}>
          {miles} mile{miles !== 1 && 's'}
        </div>
      </div>
      <div css={tw`w-3/4 px-2`}>
        <div css={tw`flex items-center`}>
          <FontAwesomeIcon
            icon={faPhone}
            css={tw`text-gray fill-current w-4 h-4 mr-2`}
          />
          <OutboundLink
            eventLabel="Facility phone link from card"
            to={`tel:${phone}`}
            css={tw`block text-gray-darkest text-lg`}
          >
            {phone}
          </OutboundLink>
        </div>
        {website !== 'http://' && (
          <OutboundLink
            eventLabel="Facility website link from card"
            to={website}
            target="_blank"
            rel="noopener noreferrer"
            css={tw`ml-6`}
          >
            {removeHttp(website)}
          </OutboundLink>
        )}
        <address css={tw`not-italic mb-2 ml-6`}>
          {street1}
          {street2 && <>, {street2}</>}, {city}, {state} {zip}
        </address>
        <div css={tw`text-sm`}>
          {renderService(services, 'TC')}
          {renderService(services, 'PAY')}
        </div>
      </div>
    </div>
  );
};

const Card = props => {
  const { frid, name1, name2, latitude, longitude } = props;

  return (
    <StyledCard>
      <CardHeading
        frid={frid}
        name1={name1}
        name2={name2}
        latitude={latitude}
        longitude={longitude}
      />
      <div css={tw`p-6`}>
        <CardDetails {...props} />
      </div>
    </StyledCard>
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
