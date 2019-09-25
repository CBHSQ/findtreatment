import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { OutboundLink } from 'react-ga';

import MapContainer from '../Map/MapContainer';

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
    phone
  } = data;

  const offersTransportation = (
    ((services || {}).AS || {}).values || []
  ).includes('Transportation assistance');

  return (
    <div css={tw`w-full md:w-1/2 px-4 mb-6`}>
      <div css={tw`bg-white shadow`}>
        <div css={tw`flex flex-col`}>
          <div css={tw`p-4 flex-grow`}>
            <h2 css={tw`font-heading font-bold mb-4 text-xl`}>Location</h2>
            <div css={tw`relative h-64 w-full mb-4`}>
              <MapContainer
                frid={frid}
                latitude={latitude}
                longitude={longitude}
                name1={name1}
                phone={phone}
              />
            </div>
            <div css={tw`text-gray-700`}>
              {street1}, {street2 && street2 + ','}
              <br />
              {city}, {state} {zip}
              <br />
              <OutboundLink
                eventLabel="Driving directions link from details"
                to={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
                  `${street1}, ${street2 &&
                    street2 + ','} ${city}, ${state} ${zip}`
                )}`}
                css={tw`font-bold`}
              >
                Get driving directions
              </OutboundLink>
            </div>
          </div>
          <div
            css={tw`flex-none flex items-center  p-4`}
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
              transportation assistance. <br css={tw`hidden lg:block`} />
              Ask them about it when you call.
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
