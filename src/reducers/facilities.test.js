import reducer from './facilities';
import {
  RECEIVE_FACILITIES_BEGIN,
  RECEIVE_FACILITIES_SUCCESS,
  RECEIVE_FACILITIES_FAILURE,
  REPORT_FACILITY,
  DESTROY_FACILITIES
} from '../actions/facilities';

const initialState = {
  data: {},
  reported: [],
  loading: false,
  error: false
};

describe('facilities reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_FACILITIES_BEGIN', () => {
    expect(
      reducer(initialState, {
        type: RECEIVE_FACILITIES_BEGIN
      })
    ).toEqual({
      reported: [],
      data: {},
      loading: true,
      error: false
    });
  });

  it('should handle RECEIVE_FACILITIES_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: RECEIVE_FACILITIES_SUCCESS,
        payload: {
          data: {
            rows: [
              {
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
        }
      })
    ).toEqual({
      data: {
        rows: [
          {
            services: {
              TC: {
                name: 'Type of Care',
                values: ['Substance use treatment']
              }
            }
          }
        ]
      },
      reported: [],
      loading: false,
      error: false
    });
  });

  it('should handle RECEIVE_FACILITIES_FAILURE', () => {
    expect(
      reducer(initialState, {
        type: RECEIVE_FACILITIES_FAILURE
      })
    ).toEqual({
      reported: [],
      data: {},
      loading: false,
      error: true
    });
  });

  it('should handle REPORT_FACILITY', () => {
    expect(
      reducer(initialState, {
        type: REPORT_FACILITY,
        frid: '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53'
      })
    ).toEqual({
      reported: [
        '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53'
      ],
      data: {},
      loading: false,
      error: false
    });
  });

  it('does not add duplicate FRID when reporting facility', () => {
    expect(
      reducer(
        {
          ...initialState,
          reported: [
            '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53'
          ]
        },
        {
          type: REPORT_FACILITY,
          frid:
            '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53'
        }
      )
    ).toEqual({
      reported: [
        '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53'
      ],
      data: {},
      loading: false,
      error: false
    });
  });

  it('should handle DESTROY_FACILITIES', () => {
    expect(
      reducer(
        {
          ...initialState,
          data: {
            rows: [
              {
                frid:
                  '2037b07b2bfb78e1bdaf2b46dd94ceb41c2da1493e7c0c22796d82762c4cbb53'
              }
            ]
          }
        },
        {
          type: DESTROY_FACILITIES
        }
      )
    ).toEqual({
      reported: [],
      data: {},
      loading: false,
      error: false
    });
  });
});
