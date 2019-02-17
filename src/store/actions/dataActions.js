import {
  SELECT_OPTION,
  SUBMIT_ANSWER,
  DONT_SUBMIT_ANSWER,
  NEXT_QUESTION,
  USE_LIFELINE,
  NEW_GAME
} from '../reducers/constants';

export const selectOption = letter => {
  return (dispatch, getState) => {
    dispatch({ type: SELECT_OPTION, payload: letter });
  };
};
export const submitAnswer = () => {
  return (dispatch, getState) => {
    dispatch({ type: SUBMIT_ANSWER });
  };
};
export const dontSubmitAnswer = () => {
  return (dispatch, getState) => {
    dispatch({ type: DONT_SUBMIT_ANSWER });
  };
};
export const nextQuestion = () => {
  return (dispatch, getState) => {
    dispatch({ type: NEXT_QUESTION });
  };
};
export const useLifeline = no => {
  return (dispatch, getState) => {
    dispatch({ type: USE_LIFELINE, payload: no });
  };
};
export const newGame = () => {
  return (dispatch, getState) => {
    dispatch({ type: NEW_GAME });
  };
};
