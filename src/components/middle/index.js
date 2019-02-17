import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Options from './Options';
import Lifelines from './Lifelines';
import Score from './Score';
const Middle = ({ question }) => {
  return (
    <section id="middle">
      <div class="container">
        <Score />
        <Question question={question} />
        <Options />
        <Lifelines />
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
