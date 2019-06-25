import {
  RECEIVE_LOCATIONS_BEGIN,
  RECEIVE_LOCATIONS_SUCCESS,
  RECEIVE_LOCATIONS_FAILURE
} from '../actions/locations';

const initialState = {
  data: {},
  loading: false
};

export default function locations(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LOCATIONS_BEGIN:
      return {
        ...state,
        error: false,
        loading: true
      };
    case RECEIVE_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    case RECEIVE_LOCATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        data: {}
      };
    default:
      return state;
  }
}
