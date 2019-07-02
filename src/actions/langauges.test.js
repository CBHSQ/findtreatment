import {
  RECEIVE_LANGUAGES_BEGIN,
  RECEIVE_LANGUAGES_SUCCESS,
  RECEIVE_LANGUAGES_FAILURE,
  receiveLanguagesBegin,
  receiveLanguagesSucess,
  receiveLanguagesFailure
} from './languages';

describe('action creators', () => {
  it('creates the receiveLanguagesBegin action', () => {
    const expected = { type: RECEIVE_LANGUAGES_BEGIN };

    expect(receiveLanguagesBegin()).toEqual(expected);
  });

  it('creates the receiveLanguagesSucess action', () => {
    const data = {};
    const expected = { type: RECEIVE_LANGUAGES_SUCCESS, payload: { data: {} } };

    expect(receiveLanguagesSucess(data)).toEqual(expected);
  });

  it('creates the receiveLanguagesFailure action', () => {
    const expected = { type: RECEIVE_LANGUAGES_FAILURE };

    expect(receiveLanguagesFailure()).toEqual(expected);
  });
});
