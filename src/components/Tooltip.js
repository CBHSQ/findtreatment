import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { Tooltip as AccessibleTooltip } from 'react-accessible-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const StyledTooltip = styled.div`
  ${tw`relative inline-block`}
  z-index: 99;

  .tooltip-label {
    cursor: pointer;
  }

  .tooltip-overlay {
    ${tw`absolute block left-0 top-0 -mt-4 pl-8 text-sm w-full font-sans normal-case font-normal`}
    width: 400px;

    &--hidden {
      ${tw`hidden`}
    }

    &-inner {
      ${tw`bg-white block rounded-lg p-4 border border-gray-light`}
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));

      &:before {
        ${tw`absolute block w-4 h-4 mt-4 top-0 left-0 bg-white border-l border-b border-gray-light`}
        content: '';
        transform-origin: 0 0;
        transform: rotate(45deg);
      }
    }
  }
`;

const Tooltip = props => (
  <StyledTooltip>
    <AccessibleTooltip
      label={props => (
        <span {...props.labelAttributes} className="tooltip-label">
          <FontAwesomeIcon icon={faInfoCircle} css={tw`fill-current`} />
        </span>
      )}
      overlay={props => (
        <span
          {...props.overlayAttributes}
          className={
            props.isHidden
              ? 'tooltip-overlay tooltip-overlay--hidden'
              : 'tooltip-overlay'
          }
        >
          <div className="tooltip-overlay-inner">{`this is more info. this is more info . this is more info . `}</div>
        </span>
      )}
    />
  </StyledTooltip>
);

export default Tooltip;
