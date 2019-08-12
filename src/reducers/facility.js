import {
  RECEIVE_FACILITY_BEGIN,
  RECEIVE_FACILITY_SUCCESS,
  RECEIVE_FACILITY_FAILURE,
  DESTROY_FACILITY
} from '../actions/facility';
import { servicesToObject } from '../utils/misc';

const initialState = {
  data: {},
  loading: false,
  error: false
};

export default function facility(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_FACILITY_BEGIN:
      return {
        ...state,
        data: {},
        loading: true,
        error: false
      };
    case RECEIVE_FACILITY_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload.data.rows
            .filter(({ frid }) => frid === action.frid)
            .map(facility => ({
              ...facility,
              services: servicesToObject(facility.services)
            }))[0]
        },
        loading: false,
        error: false
      };
    case RECEIVE_FACILITY_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        error: true
      };
    case DESTROY_FACILITY:
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
