import reducer from './ui';
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
});
