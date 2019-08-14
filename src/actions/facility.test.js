import {
  RECEIVE_FACILITY_BEGIN,
  RECEIVE_FACILITY_SUCCESS,
  RECEIVE_FACILITY_FAILURE,
  DESTROY_FACILITY,
  receiveFacilityBegin,
  receiveFacilitySuccess,
  receiveFacilityFailure,
  destroyFacility
} from './facility';

describe('action creators', () => {
  it('creates the receiveFacilityBegin action', () => {
    const expected = { type: RECEIVE_FACILITY_BEGIN };

    expect(receiveFacilityBegin()).toEqual(expected);
  });

  it('creates the receiveFacilitySuccess action', () => {
    const data = { rows: [{}] };
    const expected = {
      type: RECEIVE_FACILITY_SUCCESS,
      payload: { data: { rows: [{}] } },
      frid: '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53'
    };

    expect(
      receiveFacilitySuccess(
        data,
        '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53'
      )
    ).toEqual(expected);
  });

  it('creates the receiveFacilityFailure action', () => {
    const expected = { type: RECEIVE_FACILITY_FAILURE };

    expect(receiveFacilityFailure()).toEqual(expected);
  });

  it('creates the destroyFacility action', () => {
    const expected = { type: DESTROY_FACILITY };

    expect(destroyFacility()).toEqual(expected);
  });
});
