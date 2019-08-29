import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';

import { ReactComponent as Arrow } from '../../images/arrow.svg';

const StyledSelect = styled.select`
  ${tw`block bg-white border rounded-none appearance-none w-full py-3 px-4 pr-8`}

  &::-ms-expand {
    display: none;
  }
`;

const StyledArrow = styled.div`
  ${tw`pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-700`}
`;

const Select = ({ input, hideFirst, options }) => (
  <div css={tw`relative`}>
    <StyledSelect {...input} id={input.name}>
      {hideFirst && <option value="">--</option>}
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
    <StyledArrow>
      <Arrow css={tw`fill-current h-4 w-4`} />
    </StyledArrow>
  </div>
);

Select.propTypes = {
  hideFirst: PropTypes.bool,
  input: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired
};

export default Select;
