import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';
import Button from '../Form/Button';

export const InfoWindowText = props => {
  const { selectedPlace, singleMarker } = props;

  return (
    <>
      <h4 className="infowindow__heading" css={tw`font-bold`}>
        {selectedPlace.details.name1}
      </h4>
      <p css={tw`font-normal mb-2`}>{selectedPlace.details.phone}</p>
      {!singleMarker && (
        <Link
          to={{
            pathname: '/details',
            state: selectedPlace.details
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
