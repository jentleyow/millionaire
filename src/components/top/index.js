import React from 'react';
import logo from '../../img/logo.png';
import Music from '../top/Music';
import { nextQuestion } from '../../store/actions/dataActions';
import { connect } from 'react-redux';
const Top = props => {
  function skip() {
    if (
      props.currentState === 'question' ||
      props.currentState === 'finalanswer'
    ) {
      //do nothing
    } else {
      if (props.question < 15) {
        props.nextQuestion();
      }
      //skip
    }
  }
  return (
    <header>
      <div class="container">
        <div class="logo" onClick={skip}>
          <img src={logo} />
          <Music />
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = state => {
  return {
    question: state.data.question
  };
};
const mapDispatchToProps = dispatch => {
  return {
    nextQuestion: () => dispatch(nextQuestion())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
