import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import languages from './languages';
import facilities from './facilities';
import clearAdvancedFilters from '../plugins/search';

const extendedForm = formReducer.plugin(clearAdvancedFilters);

export default combineReducers({
  languages,
  facilities,
  form: extendedForm
});
