import { RESET_ADVANCED_FILTERS } from '../actions/filters';

const advancedFilters = ['language'];
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
      default:
        return state;
    }
  }
};
