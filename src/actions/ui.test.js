import { TOGGLE_ADVANCED_FILTERS, toggleAdvancedFilters } from './ui';

describe('action creators', () => {
  it('creates the toggleAdvancedFilters action', () => {
    const expected = { type: TOGGLE_ADVANCED_FILTERS };

    expect(toggleAdvancedFilters()).toEqual(expected);
  });
});
