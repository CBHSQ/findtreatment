import reducer from './ui';
import { TOGGLE_ADVANCED_FILTERS } from '../actions/ui';

const initialState = {
  advancedHidden: true
};

describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_ADVANCED_FILTERS', () => {
    expect(
      reducer(initialState, {
        type: TOGGLE_ADVANCED_FILTERS
      })
    ).toEqual({
      advancedHidden: false
    });
  });
});
