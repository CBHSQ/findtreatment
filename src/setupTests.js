import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const fitBounds = jest.fn();

window.google = {
  maps: {
    Marker: class {},
    Map: class {
      fitBoundsCalls = 0;
      fitBounds() {
        fitBounds();
        this.fitBoundsCalls = fitBounds.mock.calls.length;
      }
    },
    LatLng: class {
      constructor(latitude, longitude) {
        this.lat = latitude;
        this.lng = longitude;
      }
    },
    LatLngBounds: class {
      extend() {}
    },
    places: {
      Autocomplete: class {},
      AutocompleteService: class {},
      PlacesServiceStatus: {
        INVALID_REQUEST: 'INVALID_REQUEST',
        NOT_FOUND: 'NOT_FOUND',
        OK: 'OK',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        ZERO_RESULTS: 'ZERO_RESULTS'
      },
      PlacesAutocomplete: {
        INVALID_REQUEST: 'INVALID_REQUEST',
        NOT_FOUND: 'NOT_FOUND',
        OK: 'OK',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        ZERO_RESULTS: 'ZERO_RESULTS'
      }
    },
    MarkerClusterer: class {},
    Geocoder: class {}
  }
};

configure({ adapter: new Adapter() });
