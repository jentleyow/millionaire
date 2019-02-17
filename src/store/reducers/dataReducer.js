import { data } from '../../Data';
import { newScore } from './handleScore';
import {
  SUBMIT_ANSWER,
  SELECT_OPTION,
  DONT_SUBMIT_ANSWER,
  NEXT_QUESTION
} from './constants';
const initState = {
  question: 1,
  data: data,
  currentState: 'question',
  currentQuestion: null,
  lifeline: [{ google: true }, { fiftyfifty: true }, { switch: true }],
  score: '$  0.00',
  selectedOption: null,
  fiftyResult: []
};
//load first question
//const questionId = generateQuestionId(initState.data.length);
const questionId = 0;
initState.currentQuestion = loadQuestion(questionId, initState.data);
//load first question
const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case SELECT_OPTION:
      return {
        ...state,
        currentState: 'finalanswer',
        selectedOption: action.payload
      };
    case SUBMIT_ANSWER:
      const newState = checkAnswer(state);
      return { ...newState };
    case DONT_SUBMIT_ANSWER:
      return { ...state, currentState: 'question' };
    case NEXT_QUESTION:
      const questionId = generateQuestionId(state.data.length);
      const newCurrentQuestion = loadQuestion(questionId, state.data);
      return {
        ...state,
        question: state.question + 1,
        currentState: 'question',
        currentQuestion: newCurrentQuestion,
        selectedOption: null,
        fiftyResult: []
      };

    default:
      return state;
  }
};

function generateQuestionId(length) {
  return Math.floor(Math.random() * Math.floor(length));
}
function loadQuestion(questionId, data) {
  return data[questionId];
}
function checkAnswer(state) {
  const { selectedOption, currentQuestion } = state;
  let currentState = '';
  let newScore;
  if (selectedOption.valueOf() === currentQuestion.answer.valueOf()) {
    if (
      state.question === 5 ||
      state.question === 10 ||
      state.question === 15
    ) {
      currentState = 'win2';
    } else {
      currentState = 'win';
    }
    newScore = handleWin(state.question);
  } else {
    currentState = 'lose';
    newScore = handleLoss(state.question);
  }
  const newData = removeQuestion(state);

  return {
    ...state,
    currentState: currentState,
    data: newData,
    score: newScore
  };
}
function removeQuestion(state) {
  const newData = [...state.data];
  newData.splice(state.currentQuestion, 1);
  return newData;
}
function handleWin(question) {
  return newScore(question, 'win');
}
function handleLoss(question) {
  return newScore(question, 'lose');
}
export default dataReducer;
