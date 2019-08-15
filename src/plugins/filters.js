import { RESET_ADVANCED_FILTERS, RESET_ALL_FILTERS } from '../actions/filters';
import { ADVANCED_FILTERS, DEFAULT_DISTANCE } from '../utils/constants';

const initialFilterState = {
  initialValues: {
    distance: DEFAULT_DISTANCE
  }
};

const advancedFilters = ADVANCED_FILTERS;
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
  filters(state = initialFilterState, action) {
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
          values: {
            ...initialFilterState.initialValues,
            location: state.values.location
          }
        };
      }
      default:
        return state;
    }
  }
};
