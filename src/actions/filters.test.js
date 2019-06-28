import { RESET_ADVANCED_FILTERS, resetAdvancedFilters } from './filters';

describe('action creators', () => {
  it('creates the resetAdvancedFilter action', () => {
    const expected = { type: RESET_ADVANCED_FILTERS };

    expect(resetAdvancedFilters()).toEqual(expected);
  });
});
