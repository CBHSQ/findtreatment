import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submit } from 'redux-form';
import PlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng
} from 'react-places-autocomplete';
import { PropTypes } from 'prop-types';
import ReactGA from 'react-ga';

import { LOCATION_WARNING } from '../../utils/warnings';

const StyledPlacesAutoComplete = styled.span`
  ${tw`block relative`}

  input {
    ${tw`block w-full pr-10 text-lg`}

    &::-webkit-input-placeholder {
      ${tw`text-gray-darkest`}
    }
    &::-moz-placeholder {
      ${tw`text-gray-darkest`}
    }
    &:-ms-input-placeholder {
      ${tw`text-gray-darkest`}
    }
    &:-moz-placeholder {
      ${tw`text-gray-darkest`}
    }
  }

  .autocomplete-dropdown-container {
    ${tw`block absolute z-10 inset-x-0 overflow-x-hidden overflow-y-auto border border-gray rounded bg-white`}
    max-height: 25em;
    -webkit-transition: max-height 0.2s, border 0.2s;
    transition: max-height 0.2s, border 0.2s;
  }

  .suggestion-item {
    ${tw`py-3 px-4 cursor-pointer`}

    &:hover,
      &:focus {
      ${tw`bg-teal-light font-semibold`}
    }

    &--active {
      ${tw`bg-teal-light font-semibold`}

      &:hover,
      &:focus {
        ${tw`bg-teal-light font-semibold`}
      }
    }
  }
`;

class Location extends Component {
  state = {
    showLocationWarning: false
  };

  toggleShowLocationWarning = value => {
    this.setState({
      showLocationWarning: value
    });
  };

  handleChange = address => {
    const { input } = this.props;

    input.onChange({ address: address || '' });
  };

  handleSelect = (address, placeId) => {
    const { dispatch, input, meta } = this.props;
    const activeSuggestion = this._placesAutocomplete.getActiveSuggestion();

    if (input.value.latLng && address === input.value.address) {
      dispatch(submit(meta.form));
    }

    if (address && activeSuggestion) {
      this.toggleShowLocationWarning(false);

      geocodeByPlaceId(placeId)
        .then(results => getLatLng(results[0]))
        .then(latLng => input.onChange({ address, latLng }));
    }
  };

  handleError = (status, clearSuggestions) => {
    if (status === 'ZERO_RESULTS') {
      this.toggleShowLocationWarning(true);
      clearSuggestions();
      return;
    }
    ReactGA.event({
      category: 'errors',
      action: 'autocomplete API',
      label: 'Error',
      value: status
    });
    this.props.history.push({
      pathname: '/error'
    });
  };

  render() {
    const { className, input, placeholder } = this.props;
    const searchOptions = {
      componentRestrictions: { country: ['us', 'pr', 'vi', 'gu', 'mp', 'as'] },
      types: ['(regions)']
    };

    return (
      <StyledPlacesAutoComplete>
        <PlacesAutocomplete
          value={input.value.address}
          debounce={200}
          searchOptions={searchOptions}
          highlightFirstSuggestion={true}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onError={this.handleError}
          ref={el => (this._placesAutocomplete = el)}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <>
              <span css={tw`block relative`}>
                <input
                  {...getInputProps({
                    className,
                    placeholder: placeholder,
                    name: input.name,
                    'aria-owns': 'listbox',
                    'aria-haspopup': 'listbox',
                    ref: this.props.innerRef
                  })}
                />
                {suggestions && suggestions.length > 0 && (
                  <span
                    className="autocomplete-dropdown-container"
                    role="listbox"
                    id="listbox"
                    aria-label={input.name}
                  >
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? 'suggestion-item suggestion-item--active'
                        : 'suggestion-item';
                      return (
                        <span
                          css={tw`block`}
                          {...getSuggestionItemProps(suggestion, {
                            className
                          })}
                        >
                          {suggestion.description}
                        </span>
                      );
                    })}
                  </span>
                )}
              </span>
              {this.state.showLocationWarning && (
                <span css={tw`block mt-2 text-red-light text-sm`}>
                  {LOCATION_WARNING}
                </span>
              )}
            </>
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

export default withRouter(connect()(Location));
