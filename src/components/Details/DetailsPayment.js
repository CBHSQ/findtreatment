import React from 'react';
import tw from 'tailwind.macro';
import 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const DetailsPayment = props => {
  const { services } = props;

  return (
    <div css={tw`w-full md:w-1/2 px-4 mb-6`}>
      <div css={tw`bg-white h-full shadow`}>
        <div css={tw`flex flex-col h-full`}>
          <div css={tw`p-4 flex-1`}>
            <h2
              css={tw`font-heading font-bold leading-none mb-6 pb-4 border-b border-gray-light text-xl`}
            >
              Payment, insurance, or funding accepted
            </h2>
            <ul>
              {((services.PAY || {}).values || []).map((value, index) => (
                <li key={index} css={tw`flex mb-2`}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    css={tw`text-green mt-1 fill-current w-4 h-4 mr-2 flex-none`}
                  />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div css={tw`flex-none flex items-center bg-yellow-lighter p-4`}>
            <FontAwesomeIcon
              icon={faCreditCard}
              css={tw`mr-4 text-yellow`}
              className="fa-2x"
            />
            <p css={tw`text-sm`} className="payment-text">
              Contact this facility to make sure they take your specific
              insurance or coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailsPayment.propTypes = {
  services: PropTypes.object.isRequired
};

export default DetailsPayment;
