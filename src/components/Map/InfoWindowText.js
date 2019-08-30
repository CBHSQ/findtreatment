import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { OutboundLink } from 'react-ga';
import { Link } from 'react-router-dom';

import { linkToFacility } from '../../utils/misc';

import { Button } from '../Input';

export const InfoWindowText = props => {
  const { selectedPlace } = props;
  const { name1, phone, frid, latitude, longitude } = selectedPlace;

  return (
    <>
      <h4 className="infowindow__heading" css={tw`mb-2 font-bold`}>
        {name1}
      </h4>
      <p css={tw`font-normal mb-4`}>
        Phone:{' '}
        <OutboundLink
          to={`tel:${phone}`}
          eventLabel="Facility phone link from map"
        >
          {phone}
        </OutboundLink>
      </p>
      <Button
        as={Link}
        css={tw`p-1 w-full`}
        primary="true"
        to={linkToFacility({ frid, latitude, longitude })}
      >
        View provider details
      </Button>
    </>
  );
};

export default InfoWindowText;
