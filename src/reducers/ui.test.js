import reducer from './ui';
import {
  RECEIVE_FACILITIES_FAILURE,
  RECEIVE_FACILITIES_SUCCESS
} from '../actions/facilities';
import { SET_SR_MESSAGE, TOGGLE_WARNING } from '../actions/ui';

const initialState = {
  srMessage: '',
  warningIds: []
};

describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_WARNING', () => {
    expect(
      reducer(initialState, {
        type: TOGGLE_WARNING,
        id: 'my-test-warning'
      })
    ).toEqual({
      ...initialState,
      warningIds: ['my-test-warning']
    });
  });

  it('should handle SET_SR_MESSAGE', () => {
    expect(
      reducer(initialState, {
        type: SET_SR_MESSAGE,
        message: 'my-sr-message'
      })
    ).toEqual({
      ...initialState,
      srMessage: 'my-sr-message'
    });
  });

  it('should handle RECEIVE_FACILITIES end messages', () => {
    expect(
      reducer(initialState, {
        type: RECEIVE_FACILITIES_FAILURE
      })
    ).toEqual({
      ...initialState,
      srMessage: 'New results are available.'
    });

    expect(
      reducer(initialState, {
        type: RECEIVE_FACILITIES_SUCCESS
      })
    ).toEqual({
      ...initialState,
      srMessage: 'New results are available.'
    });
  });
});
