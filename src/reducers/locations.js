import { RECEIVE_LOCATIONS } from '../actions/locations';

export default function locations(state = {}, action) {
  switch (action.type) {
    case RECEIVE_LOCATIONS:
      return action.data;
    default:
      return state;
  }
}
