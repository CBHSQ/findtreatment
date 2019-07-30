import React from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { Link } from 'react-router-dom';
import Label from './Label';

const StyledSelect = styled.div`
  select {
    ${tw`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
  }
`;

const Arrow = styled.div`
  ${tw`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`}
`;

const Select = ({
  input,
  name,
  label,
  plural,
  hideFirst,
  helpURL,
  helpText,
  options
}) => (
  <StyledSelect>
    <div css={tw`flex justify-between items-center`}>
      <Label name={name} label={label} />
      {helpURL && helpURL && (
        <Link to={helpURL} css={tw`mb-2 text-sm`}>
          {helpText}
        </Link>
      )}
    </div>

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
          css={tw`fill-current h-3 w-3`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 14"
        >
          <path d="M.62639628 5.99993896H9.3727389c.25339173.00130856.482416-.15074264.57956202-.38477624.09714598-.2340336.04312294-.50357616-.13670922-.6820964L5.4401815.1835435C5.32475606.06613116 5.1670083 0 5.00236114 0c-.16464716 0-.3223949.06613117-.43782037.1835435L.1835435 4.93306632C.06613116 5.0484918 0 5.20623953 0 5.3708867s.06613117.32239492.1835435.43782038c.1146444.1224934.27508006.19177244.44285278.19123188zM9.3727389 7.9999685H.6263963c-.1662653-.00316183-.32647608.06237894-.4428528.18116705C.0661312 8.296561 0 8.45430875 0 8.61895592s.06613117.32239492.1835435.43782037l4.38099726 4.7596802C4.67996622 13.9338688 4.83771396 14 5.00236113 14s.32239492-.0661312.43782038-.1835435l4.3754102-4.74961537c.17983216-.17852023.2338552-.44806278.13670922-.68209638-.09714602-.2340336-.3261703-.3860848-.579562-.38477625z" />
        </svg>
      </Arrow>
    </div>
  </StyledSelect>
);

export default Select;
