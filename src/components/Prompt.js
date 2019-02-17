import React from 'react';
import Box from './box';
import { submitAnswer, dontSubmitAnswer } from '../store/actions/dataActions';
import { connect } from 'react-redux';
import $ from 'jquery';
const Prompt = ({ currentState, submitAnswer, dontSubmitAnswer }) => {
  function handleYesClick() {
    $('#prompt').fadeOut();
    submitAnswer();
  }
  function handleNoClick() {
    $('#prompt').fadeOut();
    dontSubmitAnswer();
  }
  if (currentState === 'finalanswer') {
    $('#prompt').fadeIn();
  } else {
    $('#prompt').fadeOut();
    //$('#prompt').css("display","none");
  }
  return (
    <div id="prompt">
      <div class="container">
        <Box className="promptQuestion">Is this your final answer?</Box>
        <Box className="red" handleClick={handleYesClick}>
          Yes
        </Box>
        <Box className="green" handleClick={handleNoClick}>
          No
        </Box>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentState: state.data.currentState
  };
};
const mapDispatchToProps = dispatch => {
  return {
    submitAnswer: () => dispatch(submitAnswer()),
    dontSubmitAnswer: () => dispatch(dontSubmitAnswer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Prompt);
