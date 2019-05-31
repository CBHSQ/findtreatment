import React from "react";
import "styled-components/macro";
import tw from "tailwind.macro";

const Select = props => {
  return (
    <>
      <label
        css={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
        htmlFor={`input-${props.name}`}
      >
        {props.label}
      </label>
      <div css={tw`relative`}>
        <select
          css={tw`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          id={`input-${props.name}`}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        >
          {props.options.map((option, index) => (
            <option key={index} value={option.value || option.name}>
              {option.name}
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
    </>
  );
};

export default Select;
