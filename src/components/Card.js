import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDirections,
  faPhone,
  faExternalLinkAlt,
  faPlusSquare,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';

import { GOOGLE_MAP_STATIC_URL } from '../utils/constants';
import { linkToFacility, removeHttp } from '../utils/misc';

import { Button } from './Input';

const StyledServices = styled.ul`
  ${tw`text-sm px-2 mb-2`}

  li {
    ${tw`inline`}

    &:not(:first-child):before {
      content: ' • ';
    }

    span {
      ${tw`border-b border-dotted`}
    }
  }
`;

const StyledHeading = styled.div`
  ${tw`px-6 py-4 bg-blue-light text-white rounded-t`}
`;

const StyledCard = tw.li`bg-white shadow border-t border-gray-lighter rounded mb-10`;

const serviceIcons = {
  TC: faPlusSquare,
  PAY: faCreditCard
};

const renderService = (services, key) => {
  const { values } = services[key];
  return (
    <div css={tw`flex -mx-2`}>
      <div css={tw`w-6 -mt-px px-2 flex-none text-center`}>
        <FontAwesomeIcon
          icon={serviceIcons[key]}
          css={tw`text-gray`}
          className="fa-sm"
        />
      </div>
      <StyledServices>
        {values.map((value, index) => (
          <li key={index}>
            <span>{value}</span>
          </li>
        ))}
      </StyledServices>
    </div>
  );
};

const CardHeading = ({ frid, name1, name2, latitude, longitude }) => (
  <StyledHeading>
    <Link
      to={linkToFacility({ frid, latitude, longitude })}
      css={tw`flex justify-between -mx-2 text-white `}
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
    <div css={tw`flex flex-wrap -mb-4 -mx-6`}>
      <div css={tw`w-full md:w-3/5 mb-4 px-6`}>
        <div css={tw`flex -mx-2 mb-4`}>
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
              alt="Google map"
              css={tw`px-2`}
            />
          </OutboundLink>
          <div css={tw`px-2`}>
            <address css={tw`not-italic mb-2`}>
              {street1}
              <br />
              {street2 && (
                <>
                  {street2}
                  <br />
                </>
              )}
              {city}, {state} {zip}
            </address>
            <OutboundLink
              eventLabel="Driving directions link from card"
              to={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
                `${street1}, ${street2 &&
                  street2 + ','} ${city}, ${state} ${zip}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              css={tw`text-sm`}
            >
              <FontAwesomeIcon
                icon={faDirections}
                css={tw`fill-current w-4 h-4 mr-2`}
              />
              Get directions
            </OutboundLink>
          </div>
        </div>
        {website !== 'http://' && (
          <OutboundLink
            eventLabel="Facility website link from card"
            to={website}
            target="_blank"
            rel="noopener noreferrer"
            css={tw`text-xs text-green`}
          >
            {removeHttp(website)}
          </OutboundLink>
        )}
      </div>
      <div css={tw`w-full md:w-2/5 mb-4 px-6`}>
        <Button
          eventLabel="Facility phone link from card"
          to={`tel:${phone}`}
          gradient
          as={OutboundLink}
          css={tw`w-full mb-4`}
        >
          <FontAwesomeIcon icon={faPhone} css={tw`fill-current w-4 h-4 mr-2`} />
          {phone}
        </Button>
        {website !== 'http://' && (
          <Button
            eventLabel="Facility website link from card"
            to={website}
            gradient
            target="_blank"
            rel="noopener noreferrer"
            as={OutboundLink}
            css={tw`w-full`}
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              css={tw`fill-current w-4 h-4 mr-2`}
            />
            Visit website
          </Button>
        )}
      </div>
      <div css={tw`w-full mb-4 px-6`}>
        {renderService(services, 'TC')}
        {renderService(services, 'PAY')}
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
