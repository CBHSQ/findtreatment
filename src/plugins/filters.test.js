import reducer from './filters';
import { RESET_ALL_FILTERS } from '../actions/filters';
import { DEFAULT_DISTANCE } from '../utils/constants';

const initialState = {
  initialValues: {
    distance: DEFAULT_DISTANCE,
    location: { address: '' }
  }
};

describe('filters reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.filters(undefined, {})).toEqual(initialState);
  });

  it('should handle RESET_ALL_FILTERS', () => {
    expect(
      reducer.filters(
        {
          ...initialState,
          values: {
            GL: 'GL',
            VET: 'VET',
            age: 'ADLT',
            distance: '40233.6',
            language: 'SP-Spanish',
            location: {
              address: 'Tempe, AZ, USA',
              latLng: {
                lat: 33.4255104,
                lng: -111.94000540000002
              }
            },
            mat: 'BU',
            payment: 'MD',
            type: 'OP'
          }
        },
        {
          type: RESET_ALL_FILTERS
        }
      )
    ).toEqual({
      ...initialState,
      values: {
        ...initialState.initialValues,
        location: {
          address: 'Tempe, AZ, USA',
          latLng: {
            lat: 33.4255104,
            lng: -111.94000540000002
          }
        }
      }
    });
  });
});

describe('homepage reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.homepage(undefined, {})).toEqual(initialState);
  });
});
