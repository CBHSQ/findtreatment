import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import languages from './languages';
import facility from './facility';
import facilities from './facilities';
import clearAdvancedFilters from '../plugins/filters';

const extendedForm = formReducer.plugin(clearAdvancedFilters);

export default history =>
  combineReducers({
    router: connectRouter(history),
    languages,
    facility,
    facilities,
    form: extendedForm
  });
