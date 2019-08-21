import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import { PropTypes } from 'prop-types';

const StyledPlacesAutoComplete = styled.div`
  ${tw`relative`}

  input {
    ${tw`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
  }

  .autocomplete-dropdown-container {
    ${tw`absolute z-10 inset-x-0 overflow-x-hidden overflow-y-auto border border-gray-500 rounded bg-white`}
    max-height: 25em;
    -webkit-transition: max-height 0.2s, border 0.2s;
    transition: max-height 0.2s, border 0.2s;
  }

  .suggestion-item {
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
  }
`;

class Location extends Component {
  handleBlur = () => {
    const activeSuggestion = this._placesAutocomplete.getActiveSuggestion();

    if (activeSuggestion !== undefined) {
      this.handleSelect(activeSuggestion.description);
    }
  };

  handleChange = address => {
    const { input } = this.props;

    input.onChange({ address: address || '' });
  };

  handleSelect = address => {
    const { dispatch, input, meta, toggleShowWarning } = this.props;
    const activeSuggestion = this._placesAutocomplete.getActiveSuggestion();

    if (input.value.latLng && address === input.value.address) {
      dispatch(submit(meta.form));
    }

    if (address && activeSuggestion) {
      if (toggleShowWarning) {
        toggleShowWarning(false);
      }

      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => input.onChange({ address, latLng }));
    }
  };

  handleError = (status, clearSuggestions) => {
    const { toggleShowWarning } = this.props;

    if (toggleShowWarning && status === 'ZERO_RESULTS') {
      toggleShowWarning(true);
    }

    clearSuggestions();
  };

  render() {
    const { input, placeholder } = this.props;
    const searchOptions = {
      componentRestrictions: { country: ['us', 'pr', 'vi', 'gu', 'mp', 'as'] },
      types: ['(regions)']
    };

    return (
      <StyledPlacesAutoComplete>
        <PlacesAutocomplete
          value={input.value.address}
          debounce={100}
          searchOptions={searchOptions}
          highlightFirstSuggestion={true}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onError={this.handleError}
          ref={el => (this._placesAutocomplete = el)}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: placeholder,
                  name: input.name
                })}
              />
              {suggestions && suggestions.length > 0 && (
                <div className="autocomplete-dropdown-container">
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item suggestion-item--active'
                      : 'suggestion-item';
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className
                        })}
                      >
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </PlacesAutocomplete>
      </StyledPlacesAutoComplete>
    );
  }
}

Location.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  toggleShowWarning: PropTypes.func
};

export default connect()(Location);
