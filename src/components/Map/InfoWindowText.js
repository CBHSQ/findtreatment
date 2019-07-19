import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { OutboundLink } from 'react-ga';
import { Link } from 'react-router-dom';
import Button from '../Form/Button';

export const InfoWindowText = props => {
  const { selectedPlace, singleMarker } = props;

  return (
    <>
      <h4 className="infowindow__heading" css={tw`mb-2 font-bold`}>
        {selectedPlace.details.name1}
      </h4>
      <p css={tw`font-normal mb-4`}>
        Phone:{' '}
        <OutboundLink
          to={`tel:${selectedPlace.details.phone}`}
          eventLabel="Facility phone link from map"
        >
          {selectedPlace.details.phone}
        </OutboundLink>
      </p>
      {!singleMarker && (
        <Link
          to={{
            pathname: '/details',
            state: { frid: selectedPlace.details.frid }
          }}
          css={tw`block`}
        >
          <Button css={tw`p-1 w-full`} primary>
            View provider details
          </Button>
        </Link>
      )}
    </>
  );
};

export default InfoWindowText;
