import {
  RESET_ALL_FILTERS,
  RESET_ADVANCED_FILTERS,
  resetAllFilters,
  resetAdvancedFilters
} from './filters';

describe('action creators', () => {
  it('creates the resetAllFilters action', () => {
    const expected = { type: RESET_ALL_FILTERS };

    expect(resetAllFilters()).toEqual(expected);
  });

  it('creates the resetAdvancedFilter action', () => {
    const expected = { type: RESET_ADVANCED_FILTERS };

    expect(resetAdvancedFilters()).toEqual(expected);
  });
});
