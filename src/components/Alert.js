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

// <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
// <div class="flex">
//   <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
//   <div>
//     <p class="font-bold">Our privacy policy has changed</p>
//     <p class="text-sm">Make sure you know how these changes affect you.</p>
//   </div>
// </div>
// </div>
