import { RESET_ALL_FILTERS, resetAllFilters } from './filters';

describe('action creators', () => {
  it('creates the resetAllFilters action', () => {
    const expected = { type: RESET_ALL_FILTERS };

    expect(resetAllFilters()).toEqual(expected);
  });
});
