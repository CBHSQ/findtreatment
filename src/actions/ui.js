export const TOGGLE_WARNING = 'TOGGLE_WARNING';
export const SET_SR_MESSAGE = 'SET_SR_MESSAGE';

export const toggleWarning = id => ({
  type: TOGGLE_WARNING,
  id
});

export const setSRMessage = message => ({
  type: SET_SR_MESSAGE,
  message
});
