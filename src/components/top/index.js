import React from 'react';
import logo from '../../img/logo.png';
import Music from '../top/Music';
import { nextQuestion, newGame } from '../../store/actions/dataActions';
import { connect } from 'react-redux';
const Top = ({ currentState, nextQuestion, newGame, question }) => {
  const skip = () => {
    if (currentState === 'question' || currentState === 'finalanswer') {
      //do nothing
    } else if (currentState === 'win' || currentState === 'win2') {
      if (question < 15) {
        nextQuestion();
      }
    } else if (currentState === 'lose') {
      newGame();
    }
  };
  let playIcon = null;
  if (currentState === 'lose') {
    playIcon = (
      <div class="playIcon">
        <i class="fas fa-play" />
      </div>
    );
  } else if (currentState === 'win' || currentState === 'win2') {
    if (question < 15) {
      playIcon = (
        <div class="playIcon">
          <i class="fas fa-play" />
        </div>
      );
    }
  }
  return (
    <header>
      <div class="container">
        <div class="logo" onClick={skip}>
          <img src={logo} />
          {playIcon}
          <Music />
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = state => {
  return {
    question: state.data.question,
    currentState: state.data.currentState
  };
};
const mapDispatchToProps = dispatch => {
  return {
    nextQuestion: () => dispatch(nextQuestion()),
    newGame: () => dispatch(newGame())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
