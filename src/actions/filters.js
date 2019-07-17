export const RESET_ADVANCED_FILTERS = 'RESET_ADVANCED_FILTERS';
export const RESET_ALL_FILTERS = 'RESET_ALL_FILTERS';

export const resetAllFilters = () => ({
  type: RESET_ALL_FILTERS
});

export const resetAdvancedFilters = () => ({
  type: RESET_ADVANCED_FILTERS
});
