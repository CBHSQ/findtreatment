import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import languages from './languages';
import locations from './locations';

export default combineReducers({
  languages,
  locations,
  form: formReducer
});
