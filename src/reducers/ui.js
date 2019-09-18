import { TOGGLE_WARNING } from '../actions/ui';

const initialState = {
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
    default:
      return state;
  }
}
