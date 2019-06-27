import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import Label from './Label';

const StyledSelect = styled.div`
  select {
    ${tw`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
  }
`;

const Arrow = styled.div`
  ${tw`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`}
`;

const Select = ({ input, name, label, plural, hideFirst, options }) => (
  <StyledSelect>
    <Label name={name} label={label} />
    <div css={tw`relative`}>
      <select name={name} {...input}>
        {!hideFirst && <option value="">All {plural.toLowerCase()}</option>}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Arrow>
        <svg
          css={tw`fill-current h-4 w-4`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </Arrow>
    </div>
  </StyledSelect>
);

export default Select;
