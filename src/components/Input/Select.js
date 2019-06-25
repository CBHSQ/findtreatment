import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import Label from './Label';

const Select = ({ input, name, label, plural, hideFirst, options }) => (
  <div>
    <Label name={name} label={label} />
    <div css={tw`relative`}>
      <select name={name} {...input} className="input-select">
        {!hideFirst && <option value="">All {plural.toLowerCase()}</option>}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div
        css={tw`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`}
      >
        <svg
          css={tw`fill-current h-4 w-4`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
);

export default Select;
