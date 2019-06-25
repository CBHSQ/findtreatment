import {
  RECEIVE_LANGUAGES_BEGIN,
  RECEIVE_LANGUAGES_SUCCESS,
  RECEIVE_LANGUAGES_FAILURE
} from '../actions/languages';

const initialState = {
  data: [],
  loading: false
};

export default function languages(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LANGUAGES_BEGIN:
      return {
        ...state,
        error: false,
        loading: true
      };
    case RECEIVE_LANGUAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data.map(language => ({
          value: `${language.serviceCode}-${language.serviceName}`,
          label: language.serviceName
        }))
      };
    case RECEIVE_LANGUAGES_FAILURE:
      return {
        ...state,
        loading: false,
        data: []
      };
    default:
      return state;
  }
}
