import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { PropTypes } from 'prop-types';
import Label from './Label';

const StyledGeosuggest = styled.div`
  .geosuggest {
    ${tw`relative`}

    &__input {
      ${tw`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
    }

    &__suggests {
      ${tw`absolute z-10 inset-x-0 overflow-x-hidden overflow-y-auto border border-gray-500 rounded bg-white`}
      max-height: 25em;
      height: 25em;
      -webkit-transition: max-height 0.2s, border 0.2s;
      transition: max-height 0.2s, border 0.2s;

      &--hidden {
        ${tw`overflow-hidden border-0`}
        max-height: 0;
      }
    }

    &__item {
      ${tw`py-3 px-4 cursor-pointer`}

      &:hover,
      &:focus {
        ${tw`bg-gray-200`}
      }

      &--active {
        ${tw`bg-blue-700 text-white`}

        &:hover,
        &:focus {
          ${tw`bg-blue-700`}
        }
      }

      &__matched-text {
        ${tw`font-bold`}
      }
    }
  }
`;

class Location extends Component {
  handleBlur = value => {
    this._geoSuggest.selectSuggest();
  };

  handleSuggest = suggest => {
    this.props.input.onChange(suggest || null);
  };

  handleNoResults = () => {
    const { toggleShowWarning } = this.props;
    if (toggleShowWarning && this._geoSuggest.state.userInput) {
      toggleShowWarning(true);
    }
  };

  onUpdateSuggests = suggests => {
    const { toggleShowWarning } = this.props;
    if (toggleShowWarning && suggests.length) {
      toggleShowWarning(false);
    }
  };

  render() {
    const { input, label, placeholder } = this.props;

    return (
      <div>
        <Label name={input.name} label={label} />
        <StyledGeosuggest>
          <Geosuggest
            id={input.name}
            name={input.name}
            autoComplete="off"
            ref={el => (this._geoSuggest = el)}
            placeholder={placeholder}
            country={['us', 'pr', 'vi', 'gu', 'mp', 'as']}
            types={['(regions)']}
            placeDetailFields={[]}
            autoActivateFirstSuggest={true}
            initialValue={input.value.label}
            queryDelay={100}
            onSuggestSelect={this.handleSuggest}
            onUpdateSuggests={this.onUpdateSuggests}
            onSuggestNoResults={this.handleNoResults}
          />
        </StyledGeosuggest>
      </div>
    );
  }
}

Location.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  toggleShowWarning: PropTypes.func
};

export default Location;
