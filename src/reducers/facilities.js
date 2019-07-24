import {
  RECEIVE_FACILITIES_BEGIN,
  RECEIVE_FACILITIES_SUCCESS,
  RECEIVE_FACILITIES_FAILURE,
  DESTROY_FACILITIES
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
        data: action.payload.data,
        params: action.payload.params
      };
    case RECEIVE_FACILITIES_FAILURE:
      return {
        ...state,
        loading: false,
        data: {}
      };
    case DESTROY_FACILITIES:
      return initialState;
    default:
      return state;
  }
}
