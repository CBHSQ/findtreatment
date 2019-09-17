import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import languages from './languages';
import facility from './facility';
import facilities from './facilities';

export default history =>
  combineReducers({
    router: connectRouter(history),
    languages,
    facility,
    facilities
  });
