import React from 'react';
import Geosuggest from 'react-geosuggest';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

const Location = ({ input, name, label, placeholder }) => (
  <div>
    <label
      htmlFor={name}
      css={tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
    >
      {label}
    </label>
    <LocationContainer>
      <div>
        <Geosuggest
          placeholder={placeholder}
          name={name}
          initialValue={input.value.label}
          country="us"
          types={['(regions)']}
          placeDetailFields={[]}
          autoActivateFirstSuggest={true}
          onSuggestSelect={suggest => {
            suggest && input.onChange(suggest);
          }}
          {...input}
        />
      </div>
    </LocationContainer>
  </div>
);

const LocationContainer = styled.div`
  .geosuggest {
    ${tw`relative`}
  }
  label {
    ${tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
  }
  input {
    ${tw`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
  }
  .geosuggest__suggests {
    ${tw`border border-gray-500`}
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 25em;
    padding: 0;
    margin-top: -1px;
    background: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    z-index: 5;
    -webkit-transition: max-height 0.2s, border 0.2s;
    transition: max-height 0.2s, border 0.2s;
  }
  .geosuggest__suggests--hidden {
    max-height: 0;
    overflow: hidden;
    border-width: 0;
  }
  .geosuggest__item {
    padding: 0.5em 0.65em;
    cursor: pointer;
  }
  .geosuggest__item:hover,
  .geosuggest__item:focus {
    background: #f5f5f5;
  }
  .geosuggest__item--active {
    background: #267dc0;
    color: #fff;
  }
  .geosuggest__item--active:hover,
  .geosuggest__item--active:focus {
    background: #ccc;
  }
  .geosuggest__item__matched-text {
    font-weight: bold;
  }
`;

export default Location;
