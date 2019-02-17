import { data } from '../../Data';
import { newScore } from './handleScore';
import {
  SUBMIT_ANSWER,
  SELECT_OPTION,
  DONT_SUBMIT_ANSWER,
  NEXT_QUESTION,
  USE_LIFELINE,
  NEW_GAME
} from './constants';
const initState = {
  question: 1,
  data: data,
  currentState: 'question',
  currentQuestion: null,
  lifelines: [0, 1, 2],
  score: 0,
  selectedOption: null,
  fiftyResult: []
};

//load first question
const dataReducer = (state = loadInitialState(initState), action) => {
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
    case USE_LIFELINE:
      let lifelines = [...state.lifelines];
      const copyState = { ...state };
      copyState.lifelines = spliceArray(lifelines, action.payload);
      if (action.payload === 0) {
        var win = window.open(
          'https://www.google.com/search?q=' + state.currentQuestion.question,
          '_blank'
        );
        win.focus();
      } else if (action.payload === 1) {
        const answer = state.currentQuestion.answer;
        let correctAnswer = -1;
        let arr = [0, 1, 2, 3];
        switch (answer) {
          case 'A':
            correctAnswer = 0;
            break;
          case 'B':
            correctAnswer = 1;
            break;
          case 'C':
            correctAnswer = 2;
            break;
          case 'D':
            correctAnswer = 3;
            break;
          default:
            break;
        }
        const randomNumber = Math.floor(Math.random() * Math.floor(3));
        arr = spliceArray(arr, correctAnswer);
        let secondAnswer = arr[randomNumber];
        arr = spliceArray(arr, secondAnswer);
        copyState.fiftyResult = arr;
      } else if (action.payload === 2) {
        const newData = removeQuestion(copyState);
        copyState.data = newData;
        const questionId = generateQuestionId(copyState.data.length);
        copyState.currentQuestion = loadQuestion(questionId, copyState.data);
        copyState.fiftyResult = [];
      }
      return copyState;
    case NEW_GAME:
      return { ...loadInitialState(initState) };
    default:
      return state;
  }
};
const loadInitialState = state => {
  const copyState = { ...state };
  const questionId = generateQuestionId(copyState.data.length);
  copyState.currentQuestion = loadQuestion(questionId, copyState.data);
  return copyState;
};
const generateQuestionId = length => {
  return Math.floor(Math.random() * Math.floor(length));
};
const loadQuestion = (questionId, data) => {
  return data[questionId];
};
const checkAnswer = state => {
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
    console.log(currentState);
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
};
const removeQuestion = state => {
  const newData = [...state.data];
  newData.splice(state.currentQuestion, 1);
  return newData;
};
const handleWin = question => {
  return newScore(question, 'win');
};
const handleLoss = question => {
  return newScore(question, 'lose');
};
const spliceArray = (array, query) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === query) {
      array.splice(i, 1);
      break;
    }
  }
  return array;
};
export default dataReducer;
