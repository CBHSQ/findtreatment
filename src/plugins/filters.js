import { RESET_ALL_FILTERS } from '../actions/filters';
import { DEFAULT_DISTANCE } from '../utils/constants';

const initialFilterState = {
  initialValues: {
    distance: DEFAULT_DISTANCE,
    location: { address: '' }
  }
};

export default {
  filters(state = initialFilterState, action) {
    switch (action.type) {
      case RESET_ALL_FILTERS: {
        return {
          ...state,
          values: {
            ...initialFilterState.initialValues,
            location: state.values.location
          }
        };
      }
      default:
        return state;
    }
  },

  homepage(state = initialFilterState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
};
