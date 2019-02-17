import React from 'react';
import Box from '../box';
import { connect } from 'react-redux';
const Blank = ({ question, answer }) => {
  return (
    <React.Fragment>
      <Box className="question">{question}</Box>
      <Box className="options" />
      <Box className="options" />
      <Box className="options" />
      <Box className="options" />
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  const { question, answer } = state.data.currentQuestion;
  return {
    question: question,
    answer: answer
  };
};
export default connect(
  mapStateToProps,
  null
)(Blank);
