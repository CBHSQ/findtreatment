import {
  RECEIVE_FACILITIES_BEGIN,
  RECEIVE_FACILITIES_SUCCESS,
  RECEIVE_FACILITIES_FAILURE
} from '../actions/facilities';

const initialState = {
  data: {},
  loading: false
};

export default function facilities(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_FACILITIES_BEGIN:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_FACILITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    case RECEIVE_FACILITIES_FAILURE:
      return {
        ...state,
        loading: false,
        data: {}
      };
    default:
      return state;
  }
}
