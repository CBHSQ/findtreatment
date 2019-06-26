import API from '../utils/api';

export const RECEIVE_LANGUAGES_BEGIN = 'RECEIVE_LANGUAGES_BEGIN';
export const RECEIVE_LANGUAGES_SUCCESS = 'RECEIVE_LANGUAGES_SUCCESS';
export const RECEIVE_LANGUAGES_FAILURE = 'RECEIVE_LANGUAGES_FAILURE';

export const receiveLanguagesBegin = () => {
  return {
    type: RECEIVE_LANGUAGES_BEGIN
  };
};

export const receiveLanguagesSucess = data => {
  return {
    type: RECEIVE_LANGUAGES_SUCCESS,
    payload: { data }
  };
};

export const receiveLanguagesFailure = error => {
  return {
    type: RECEIVE_LANGUAGES_FAILURE
  };
};

export function handleReceiveLanguages() {
  return dispatch => {
    dispatch(receiveLanguagesBegin());

    return API.get('/languages')
      .then(response => {
        dispatch(receiveLanguagesSucess(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
