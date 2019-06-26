import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import languages from './languages';
import facilities from './facilities';

export default combineReducers({
  languages,
  facilities,
  form: formReducer
});
