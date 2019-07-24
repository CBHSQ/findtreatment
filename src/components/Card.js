import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { convertToSlug, hash } from '../utils/misc';
import { Button } from './Input';

const pathForFacility = ({ frid, name1, params }) => {
  let slug = `${convertToSlug(name1)}-${hash(frid)}`;
  let query = [encodeURIComponent(params.sAddr)];
  if (params.limitValue) {
    query.push(encodeURIComponent(params.limitValue));
  }
  return [slug, query.join(':')].join('/');
};

const StyledHeading = tw.div`flex justify-between`;
const StyledAddress = tw.address`text-gray-600 not-italic`;
const StyledCard = tw.li`shadow border rounded p-6 mb-6`;

const CardHeading = ({ frid, name1, name2, miles, params }) => (
  <StyledHeading>
    <Link
      to={{
        pathname: `/details/${pathForFacility({ frid, name1, params })}`,
        state: { frid }
      }}
    >
      <h2 css={tw`mb-2`}>
        {name1}
        {name2 && (
          <span className="card-name2" css={tw`block text-lg font-light`}>
            {name2}
          </span>
        )}
      </h2>
    </Link>
    {miles && (
      <span className="card-miles" css={tw`text-gray-500`}>
        {miles} miles
      </span>
    )}
  </StyledHeading>
);

const CardAddress = ({ street1, street2, city, state, zip }) => (
  <StyledAddress>
    <FontAwesomeIcon icon={faMapMarkerAlt} css={tw`text-gray-400 mr-1`} />
    {street1}, {street2 && street2 + ', '}
    {city}, {state} {zip}
  </StyledAddress>
);

const CardDetails = ({ phone, website, services }) => (
  <>
    <ul>
      <li>
        <span css={tw`font-semibold`}>Phone:</span>{' '}
        <OutboundLink
          eventLabel="Facility phone link from card"
          to={`tel:${phone}`}
        >
          {phone}
        </OutboundLink>
      </li>
      {website !== 'http://' && (
        <li className="card-website" css={tw`truncate`}>
          <span css={tw`font-semibold`}>Website:</span>{' '}
          <OutboundLink
            eventLabel="Facility website link from card"
            to={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </OutboundLink>
        </li>
      )}
    </ul>
    <p>
      <span css={tw`font-semibold`}>Type of care:</span> {services[0].f3}
    </p>
  </>
);

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
    <StyledCard>
      <CardHeading
        frid={frid}
        name1={name1}
        name2={name2}
        miles={miles}
        params={params}
      />
      <CardAddress
        street1={street1}
        street2={street2}
        city={city}
        state={state}
        zip={zip}
      />
      <CardDetails phone={phone} website={website} services={services} />
      <Link to={{ pathname: '/details', state: { frid } }}>
        <Button primary>View provider details</Button>
      </Link>
    </StyledCard>
  );
};

Card.propTypes = {
  frid: PropTypes.string.isRequired,
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string,
  miles: PropTypes.number,
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
