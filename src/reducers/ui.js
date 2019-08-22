import { TOGGLE_ADVANCED_FILTERS } from '../actions/ui';

const initialState = {
  advancedHidden: true
};

export default function languages(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ADVANCED_FILTERS: {
      return {
        ...state,
        advancedHidden: !state.advancedHidden
      };
    }
    default:
      return state;
  }
}
