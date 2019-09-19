import reducer from './ui';
import { TOGGLE_WARNING } from '../actions/ui';

const initialState = {
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
      warningIds: ['my-test-warning']
    });
  });
});
