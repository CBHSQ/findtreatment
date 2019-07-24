import {
  RECEIVE_FACILITIES_BEGIN,
  RECEIVE_FACILITIES_SUCCESS,
  RECEIVE_FACILITIES_FAILURE,
  receiveFacilitiesBegin,
  receiveFacilitiesSucess,
  receiveFacilitiesFailure
} from './facilities';

describe('action creators', () => {
  it('creates the receiveFacilitiesBegin action', () => {
    const expected = { type: RECEIVE_FACILITIES_BEGIN };

    expect(receiveFacilitiesBegin()).toEqual(expected);
  });

  it('creates the receiveFacilitiesSucess action', () => {
    const data = {};
    const expected = {
      type: RECEIVE_FACILITIES_SUCCESS,
      payload: { data: {} }
    };

    expect(receiveFacilitiesSucess(data)).toEqual(expected);
  });

  it('creates the receiveFacilitiesFailure action', () => {
    const expected = { type: RECEIVE_FACILITIES_FAILURE };

    expect(receiveFacilitiesFailure()).toEqual(expected);
  });
});
