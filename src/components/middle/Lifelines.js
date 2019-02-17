import React from 'react';
import Lifeline from './Lifeline';
import { connect } from 'react-redux';
import { useLifeline } from '../../store/actions/dataActions';

const Lifelines = ({ useLifeline, lifelines, currentState }) => {
  const enabledLifeline = (no, currentState) => {
    if (currentState === 'question' || currentState === 'finalanswer') {
      useLifeline(no);
    }
  };
  const googleSearch = () => {
    enabledLifeline(0, currentState);
  };
  const fiftyfifty = () => {
    enabledLifeline(1, currentState);
  };
  const newQuestion = () => {
    enabledLifeline(2, currentState);
  };
  let arrDisabled = [];
  arrDisabled[0] = true;
  arrDisabled[1] = true;
  arrDisabled[2] = true;
  for (let i = 0; i < lifelines.length; i++) {
    arrDisabled[lifelines[i]] = false;
  }
  return (
    <div id="lifelines">
      <div class="container">
        <Lifeline handleClick={googleSearch} disabled={arrDisabled[0]}>
          <i class="fab fa-google" />
        </Lifeline>
        <Lifeline handleClick={fiftyfifty} disabled={arrDisabled[1]}>
          50:50
        </Lifeline>
        <Lifeline handleClick={newQuestion} disabled={arrDisabled[2]}>
          <i class="fas fa-sync-alt" />
        </Lifeline>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { lifelines, currentState, currentQuestion } = state.data;
  return {
    lifelines: lifelines,
    currentState: currentState
  };
};
const mapDispatchToProps = dispatch => {
  return {
    useLifeline: no => dispatch(useLifeline(no))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lifelines);
