import reducer from './facility';
import {
  RECEIVE_FACILITY_BEGIN,
  RECEIVE_FACILITY_SUCCESS,
  RECEIVE_FACILITY_FAILURE,
  DESTROY_FACILITY
} from '../actions/facility';

const initialState = {
  data: {},
  loading: false,
  error: false
};

describe('facility reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_FACILITY_BEGIN', () => {
    expect(
      reducer(initialState, {
        type: RECEIVE_FACILITY_BEGIN
      })
    ).toEqual({
      data: {},
      loading: true,
      error: false
    });
  });

  it('should handle RECEIVE_FACILITY_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: RECEIVE_FACILITY_SUCCESS,
        payload: {
          data: {
            rows: [
              {
                frid:
                  '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53',
                services: [
                  {
                    f1: 'Type of Care',
                    f2: 'TC',
                    f3: 'Substance use treatment'
                  }
                ]
              }
            ]
          }
        },
        frid: '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53'
      })
    ).toEqual({
      data: {
        frid:
          '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53',
        services: {
          TC: {
            name: 'Type of Care',
            values: ['Substance use treatment']
          }
        }
      },
      loading: false,
      error: false
    });
  });

  it('should handle RECEIVE_FACILITY_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: RECEIVE_FACILITY_FAILURE
      })
    ).toEqual({
      data: {},
      loading: false,
      error: true
    });
  });

  it('should handle DESTROY_FACILITY', () => {
    expect(
      reducer(
        {
          ...initialState,
          data: {
            frid:
              '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53',
            services: {
              TC: {
                name: 'Type of Care',
                values: ['Substance use treatment']
              }
            }
          }
        },
        {
          type: DESTROY_FACILITY
        }
      )
    ).toEqual({
      data: {},
      loading: false,
      error: false
    });
  });
});
