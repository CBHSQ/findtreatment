import reducer from './filters';
import { RESET_ADVANCED_FILTERS, RESET_ALL_FILTERS } from '../actions/filters';
import { DEFAULT_DISTANCE } from '../utils/constants';

const initialState = {
  distance: DEFAULT_DISTANCE
};

describe('filters reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.filters(undefined, {})).toEqual(initialState);
  });

  it('should handle RESET_ADVANCED_FILTERS', () => {
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
              description: 'Tempe, AZ, USA',
              isFixture: false,
              label: 'Tempe, AZ, USA',
              matchedSubstrings: {},
              placeId: 'ChIJ44CqppgIK4cRH7QsOa1K3aI'
            },
            mat: 'BU',
            payment: 'MD',
            type: 'OP'
          }
        },
        {
          type: RESET_ADVANCED_FILTERS
        }
      )
    ).toEqual({
      ...initialState,
      values: {
        distance: '40233.6',
        location: {
          description: 'Tempe, AZ, USA',
          isFixture: false,
          label: 'Tempe, AZ, USA',
          matchedSubstrings: {},
          placeId: 'ChIJ44CqppgIK4cRH7QsOa1K3aI'
        },
        payment: 'MD',
        type: 'OP'
      }
    });
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
              description: 'Tempe, AZ, USA',
              isFixture: false,
              label: 'Tempe, AZ, USA',
              matchedSubstrings: {},
              placeId: 'ChIJ44CqppgIK4cRH7QsOa1K3aI'
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
        ...initialState,
        location: {
          description: 'Tempe, AZ, USA',
          isFixture: false,
          label: 'Tempe, AZ, USA',
          matchedSubstrings: {},
          placeId: 'ChIJ44CqppgIK4cRH7QsOa1K3aI'
        }
      }
    });
  });
});
