import {
  SET_SR_MESSAGE,
  TOGGLE_WARNING,
  setSRMessage,
  toggleWarning
} from './ui';

describe('action creators', () => {
  it('creates the toggleWarning action', () => {
    const expected = { type: TOGGLE_WARNING, id: 'my-test-warning' };

    expect(toggleWarning('my-test-warning')).toEqual(expected);
  });
});

describe('action creators', () => {
  it('creates the setSRMessage action', () => {
    const expected = { type: SET_SR_MESSAGE, message: 'my-sr-message' };

    expect(setSRMessage('my-sr-message')).toEqual(expected);
  });
});
