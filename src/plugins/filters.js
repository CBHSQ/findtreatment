import { RESET_ADVANCED_FILTERS, RESET_ALL_FILTERS } from '../actions/filters';

export const initialFilterState = {
  distance: 16093.4
};

const advancedFilters = ['language', 'VET', 'GL', 'mat'];
const resetFilters = values => {
  return Object.entries(values).reduce((memo, [key, value]) => {
    if (advancedFilters.includes(key)) {
      return memo;
    }

    return {
      ...memo,
      [key]: value
    };
  }, {});
};

export default {
  filters(state, action) {
    switch (action.type) {
      case RESET_ADVANCED_FILTERS: {
        return {
          ...state,
          values: resetFilters(state.values)
        };
      }
      case RESET_ALL_FILTERS: {
        return {
          ...state,
          values: { ...initialFilterState }
        };
      }
      default:
        return state;
    }
  }
};
