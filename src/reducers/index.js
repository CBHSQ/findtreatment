import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import facility from './facility';
import facilities from './facilities';
import ui from './ui';

export default history =>
  combineReducers({
    router: connectRouter(history),
    facility,
    facilities,
    form: formReducer,
    ui
  });
