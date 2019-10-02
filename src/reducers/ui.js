import { SET_SR_MESSAGE, TOGGLE_WARNING } from '../actions/ui';
import {
  RECEIVE_FACILITIES_FAILURE,
  RECEIVE_FACILITIES_SUCCESS
} from '../actions/facilities';

const initialState = {
  srMessage: '',
  warningIds: []
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_WARNING:
      return {
        ...state,
        warningIds: state.warningIds.includes(action.id)
          ? state.warningIds.filter(id => id !== action.id)
          : state.warningIds.filter(id => id !== action.id).concat(action.id)
      };
    case SET_SR_MESSAGE:
      return {
        ...state,
        srMessage: action.message
      };
    case RECEIVE_FACILITIES_FAILURE:
    case RECEIVE_FACILITIES_SUCCESS:
      return {
        ...state,
        srMessage: 'New results are available.'
      };
    default:
      return state;
  }
}
