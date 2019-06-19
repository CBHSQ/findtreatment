import {
  RECEIVE_LOCATIONS_BEGIN,
  RECEIVE_LOCATIONS_SUCCESS
} from '../actions/locations';

const initialState = {
  data: {
    recordCount: 0,
    rows: []
  },
  loading: false
};

export default function locations(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LOCATIONS_BEGIN:
      return {
        ...state,
        loading: true
      };
    case RECEIVE_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    default:
      return state;
  }
}
