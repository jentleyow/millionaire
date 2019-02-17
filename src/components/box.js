import React from 'react';
const Box = props => {
  const { children, className, handleClick } = props;
  const boxClass = 'box ' + className;
  return (
    <div class={boxClass} onClick={handleClick}>
      <p>{children}</p>
    </div>
  );
};
export default Box;
