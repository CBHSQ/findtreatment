import {
  RECEIVE_FACILITIES_BEGIN,
  RECEIVE_FACILITIES_SUCCESS,
  RECEIVE_FACILITIES_FAILURE,
  REPORT_FACILITY,
  DESTROY_FACILITIES,
  receiveFacilitiesBegin,
  receiveFacilitiesSuccess,
  receiveFacilitiesFailure,
  reportFacility,
  destroyFacilities
} from './facilities';

describe('action creators', () => {
  it('creates the receiveFacilitiesBegin action', () => {
    const expected = { type: RECEIVE_FACILITIES_BEGIN };

    expect(receiveFacilitiesBegin()).toEqual(expected);
  });

  it('creates the receiveFacilitiesSuccess action', () => {
    const data = { rows: [{}] };
    const expected = {
      type: RECEIVE_FACILITIES_SUCCESS,
      payload: { data: { rows: [{}] } }
    };

    expect(receiveFacilitiesSuccess(data)).toEqual(expected);
  });

  it('creates the receiveFacilitiesFailure action', () => {
    const expected = { type: RECEIVE_FACILITIES_FAILURE };

    expect(receiveFacilitiesFailure()).toEqual(expected);
  });

  it('creates the reportFacility action', () => {
    const expected = {
      type: REPORT_FACILITY,
      frid: '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53'
    };

    expect(
      reportFacility(
        '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53'
      )
    ).toEqual(expected);
  });

  it('creates the destroyFacilities action', () => {
    const expected = { type: DESTROY_FACILITIES };

    expect(destroyFacilities()).toEqual(expected);
  });
});
