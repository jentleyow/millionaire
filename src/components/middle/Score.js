import React from 'react';
import { connect } from 'react-redux';
import Box from '../box';
import accounting from 'accounting';
const Score = props => {
  function generateScore(score) {
    let finalScore = 0;
    switch (score) {
      case 1:
        finalScore = 100;
        break;
      case 2:
        finalScore = 200;
        break;
      case 3:
        finalScore = 300;
        break;
      case 4:
        finalScore = 500;
        break;
      case 5:
        finalScore = 1000;
        break;
      case 6:
        finalScore = 2000;
        break;
      case 7:
        finalScore = 4000;
        break;
      case 8:
        finalScore = 8000;
        break;
      case 9:
        finalScore = 16000;
        break;
      case 10:
        finalScore = 32000;
        break;
      case 11:
        finalScore = 64000;
        break;
      case 12:
        finalScore = 125000;
        break;
      case 13:
        finalScore = 250000;
        break;
      case 14:
        finalScore = 500000;
        break;
      case 15:
        finalScore = 'Millionaire!!!';
        break;
      default:
        finalScore = 0;
        break;
    }
    if (score !== 15) {
      finalScore = accounting.formatMoney(finalScore);
    }
    return finalScore;
  }
  return <Box className="score">{generateScore(props.score)}</Box>;
};

const mapStateToProps = state => {
  return {
    score: state.data.score
  };
};
export default connect(
  mapStateToProps,
  null
)(Score);
