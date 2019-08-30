import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Alert = () => (
  <div css={tw`mb-4 border-2 border-gray-light`} role="alert">
    <div css={tw`flex`}>
      <div css={tw`p-4 bg-teal-lighter border-r-2 border-gray-light`}>
        <FontAwesomeIcon
          icon={faInfoCircle}
          css={tw`text-teal-light mr-2 fill-current`}
          className="fa-2x"
        />
      </div>
      <div css={tw`p-4 bg-white`}>
        <p css={tw`text-sm`}>
          All facilities are licensed by their states and provide assessments.
          Before visiting a facility, call to make sure they have the services
          you need. Not sure what you need?{' '}
          <Link
            to="/content/treatment-options#types-of-treatment"
            css={tw`underline`}
          >
            Learn more about different types of treatment
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default Alert;
