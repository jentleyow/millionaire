import React from 'react';
import Option from './Option';
import { connect } from 'react-redux';
const Options = ({
  options,
  currentState,
  answer,
  selectedOption,
  fiftyResult
}) => {
  const displayOptions = (
    options,
    currentState,
    answer,
    selectedOption,
    fiftyResult
  ) => {
    const letters = ['A', 'B', 'C', 'D'];
    let arrClass = [];
    let disabled = true;
    for (let i = 0; i < letters.length; i++) {
      let className = 'options grey';
      const letter = letters[i];
      if (currentState === 'question' || currentState === 'finalanswer') {
        disabled = false;
      } else if (currentState === 'win' || currentState === 'win2') {
        //style option
        if (letter === answer) {
          className = 'options green';
        }
      } else {
        if (letter === answer) {
          className = 'options green';
        }
        if (letter === selectedOption) {
          className = 'options red';
        }
      }
      arrClass.push(className);
    }

    if (fiftyResult.length === 2) {
      for (let i = 0; i < fiftyResult.length; i++) {
        arrClass[fiftyResult[i]] = 'options greyout';
      }
    }

    let allOptions = (
      <React.Fragment>
        <Option className={arrClass[0]} letter="A" disabled={disabled}>
          {options[0]}
        </Option>
        <Option className={arrClass[1]} letter="B" disabled={disabled}>
          {options[1]}
        </Option>
        <Option className={arrClass[2]} letter="C" disabled={disabled}>
          {options[2]}
        </Option>
        <Option className={arrClass[3]} letter="D" disabled={disabled}>
          {options[3]}
        </Option>
      </React.Fragment>
    );

    return allOptions;
  };

  return (
    <React.Fragment>
      {displayOptions(
        options,
        currentState,
        answer,
        selectedOption,
        fiftyResult
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const {
    currentQuestion,
    selectedOption,
    currentState,
    fiftyResult
  } = state.data;
  const { A, B, C, D, answer } = currentQuestion;

  return {
    currentState: currentState,
    options: [A, B, C, D],
    answer: answer,
    selectedOption: selectedOption,
    fiftyResult: fiftyResult
  };
};
export default connect(
  mapStateToProps,
  null
)(Options);
