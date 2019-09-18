import { TOGGLE_WARNING, toggleWarning } from './ui';

describe('action creators', () => {
  it('creates the toggleWarning action', () => {
    const expected = { type: TOGGLE_WARNING, id: 'my-test-warning' };

    expect(toggleWarning('my-test-warning')).toEqual(expected);
  });
});
