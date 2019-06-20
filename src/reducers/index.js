import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import locations from './locations';

export default combineReducers({
  locations,
  form: formReducer
});
