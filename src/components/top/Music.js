import React from 'react';
import ReactHowler from 'react-howler';
import { connect } from 'react-redux';
import question1 from '../../sound/question1.mp3';
import question2 from '../../sound/question2.mp3';
import finalanswer from '../../sound/finalanswer.mp3';
import lose from '../../sound/lose.mp3';
import win from '../../sound/win.mp3';
import win2 from '../../sound/win2.mp3';
const Music = props => {
  return <ReactHowler src={props.src} playing={true} loop={props.loop} />;
};
const mapStateToProps = state => {
  let src = null;
  let loop = false;
  switch (state.data.currentState) {
    case 'question':
      const randomNumber = Math.floor(Math.random() * Math.floor(2));
      if (randomNumber === 0) {
        src = question1;
      } else {
        src = question2;
      }
      loop = true;
      break;
    case 'finalanswer':
      src = finalanswer;
      loop = true;
      break;
    case 'lose':
      src = lose;
      break;
    case 'win':
      src = win;
      break;
    case 'win2':
      src = win2;
      break;
    default:
      src = question1;
      break;
  }
  return {
    src: src,
    loop: loop
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
)(Music);
