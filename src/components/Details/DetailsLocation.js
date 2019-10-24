import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faExclamationTriangle,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import OutboundLink from '../OutboundLink';

import { formatAddress, formatMiles, googleMapUrl } from '../../utils/misc';

import MapContainer from '../Map/MapContainer';
import { Button } from '../Input';

const DetailsLocation = props => {
  const { data } = props;
  const {
    frid,
    longitude,
    latitude,
    name1,
    street1,
    street2,
    city,
    state,
    zip,
    services,
    phone,
    miles
  } = data;

  const address = {
    street1,
    street2,
    city,
    state,
    zip
  };

  const offersTransportation = (
    ((services || {}).AS || {}).values || []
  ).includes('Transportation assistance');

  return (
    <div css={tw`w-full md:w-1/2 px-4 mb-6`}>
      <div css={tw`bg-white h-full shadow`}>
        <div css={tw`flex flex-col h-full`}>
          <div css={tw`p-4 flex-auto`}>
            <h2
              css={tw`font-heading font-bold leading-none mb-6 pb-4 border-b border-gray-light text-xl flex items-center justify-between`}
            >
              Location
              {miles !== 0 && (
                <span css={tw`font-sans font-normal text-gray text-base`}>
                  {formatMiles(miles)} away
                </span>
              )}
            </h2>
            <div css={tw`relative h-64 w-full mb-6`}>
              <MapContainer
                frid={frid}
                latitude={latitude}
                longitude={longitude}
                name1={name1}
                phone={phone}
              />
            </div>
            <div css={tw`text-gray-700 flex flex-wrap -mx-2 mb-4 lg:mb-2`}>
              <div css={tw`w-full lg:w-3/5 px-2 mb-6 lg:mb-0`}>
                <span css={tw`whitespace-pre-line`}>
                  {formatAddress(address, true)}
                </span>
              </div>
              <div css={tw`w-full lg:w-2/5 px-2`}>
                <Button
                  forwardedAs={OutboundLink}
                  gradient
                  eventLabel="Driving directions link from details"
                  to={googleMapUrl(address)}
                  css={tw`w-full`}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} css={tw`mr-2`} />
                  Get directions
                </Button>
              </div>
            </div>
          </div>
          <div
            css={tw`flex-none flex items-center p-4`}
            style={
              offersTransportation
                ? { ...tw`bg-blue-lighter` }
                : { ...tw`bg-yellow-lighter` }
            }
          >
            <FontAwesomeIcon
              icon={offersTransportation ? faCar : faExclamationTriangle}
              css={tw`mr-4`}
              style={
                offersTransportation
                  ? { ...tw`text-teal` }
                  : { ...tw`text-yellow` }
              }
              className="fa-2x"
            />
            <p css={tw`text-sm`} className="transportation-text">
              This facility{' '}
              <strong>
                {offersTransportation ? 'offers' : 'does not offer'}
              </strong>{' '}
              transportation assistance.
              {offersTransportation && (
                <>
                  <br css={tw`hidden lg:block`} /> Ask them about it when you
                  call.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailsLocation.propTypes = {
  data: PropTypes.object.isRequired
};

export default DetailsLocation;
