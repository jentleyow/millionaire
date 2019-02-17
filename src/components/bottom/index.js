import React from 'react';
import { connect } from 'react-redux';
import Box from '../box';
const Bottom = props => {
  return (
    <section id="bottom">
      <div class="container">
        <Box className="score">{props.score}</Box>
      </div>
    </section>
  );
};
const mapStateToProps = state => {
  return {
    score: state.data.score
  };
};
export default connect(
  mapStateToProps,
  null
)(Bottom);
