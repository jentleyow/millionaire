import React from 'react';
import Box from '../box';
import { selectOption } from '../../store/actions/dataActions';
import { connect } from 'react-redux';
const Option = ({ letter, children, selectOption, className, disabled }) => {
  function handleClick() {
    if (!disabled) {
      selectOption(letter);
    }
  }
  return (
    <Box className={className} handleClick={handleClick}>
      {letter}. <span class="option">&nbsp;&nbsp;&nbsp;{children}</span>
    </Box>
  );
};
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    selectOption: letter => dispatch(selectOption(letter))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Option);
