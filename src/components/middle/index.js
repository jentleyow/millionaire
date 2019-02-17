import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Options from './Options';
import Lifeline from './Lifeline';
import Blank from './Blank';
const Middle = ({
  currentState,
  lifeline,
  answer,
  options,
  question,
  selectedOption
}) => {
  let questionAndAnswer = (
    <React.Fragment>
      <Question question={question} />
      <Options />
    </React.Fragment>
  );
  return (
    <section id="middle">
      <div class="container">
        {questionAndAnswer}
        <Lifeline />
      </div>
    </section>
  );
};
const mapStateToProps = state => {
  const { currentQuestion, lifeline } = state.data;
  const { question } = currentQuestion;

  return {
    question: question,
    lifeline: lifeline
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // getReferrals: () => dispatch(getReferrals())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Middle);
