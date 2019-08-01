import {
  RECEIVE_FACILITIES_BEGIN,
  RECEIVE_FACILITIES_SUCCESS,
  RECEIVE_FACILITIES_FAILURE,
  REPORT_FACILITY,
  DESTROY_FACILITIES
} from '../actions/facilities';
import { servicesToObject } from '../utils/misc';

const initialState = {
  data: {},
  reported: [],
  loading: false,
  error: false
};

export default function facilities(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_FACILITIES_BEGIN:
      return {
        ...state,
        data: {},
        loading: true,
        error: false
      };
    case RECEIVE_FACILITIES_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload.data,
          rows: action.payload.data.rows.map(facility => ({
            ...facility,
            services: servicesToObject(facility.services)
          }))
        },
        loading: false,
        error: false
      };
    case RECEIVE_FACILITIES_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        error: true
      };
    case REPORT_FACILITY:
      return {
        ...state,
        reported: state.reported
          .filter(frid => frid !== action.frid)
          .concat(action.frid)
      };
    case DESTROY_FACILITIES:
      return {
        ...state,
        data: {},
        loading: false,
        error: false
      };
    default:
      return state;
  }
}
