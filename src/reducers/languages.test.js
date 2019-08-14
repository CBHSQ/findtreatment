import reducer from './languages';
import {
  RECEIVE_LANGUAGES_BEGIN,
  RECEIVE_LANGUAGES_SUCCESS,
  RECEIVE_LANGUAGES_FAILURE
} from '../actions/languages';

const initialState = {
  data: [],
  loading: false
};

describe('languages reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_LANGUAGES_BEGIN', () => {
    expect(
      reducer(initialState, {
        type: RECEIVE_LANGUAGES_BEGIN
      })
    ).toEqual({
      data: [],
      loading: true
    });
  });

  it('should handle RECEIVE_LANGUAGES_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: RECEIVE_LANGUAGES_SUCCESS,
        payload: {
          data: [
            {
              serviceCode: 'F110',
              serviceName: 'Akan',
              categoryCode: 'OL',
              categoryName: 'Other Languages',
              writeIn: '1',
              mhCode: 'Y',
              saCode: 'Y',
              bothCode: 'Y'
            }
          ]
        }
      })
    ).toEqual({
      data: [{ value: 'F110-Akan', label: 'Akan' }],
      loading: false
    });
  });

  it('should handle RECEIVE_LANGUAGES_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: RECEIVE_LANGUAGES_FAILURE
      })
    ).toEqual({
      data: [],
      loading: false
    });
  });
});
