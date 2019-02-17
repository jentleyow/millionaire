import React from 'react';
const Lifeline = ({ children, handleClick, disabled }) => {
  return (
    <div>
      <div className="lifeline" onClick={disabled ? null : handleClick}>
        {children}
      </div>
      {disabled ? <div className="disabled">X</div> : null}
    </div>
  );
};
export default Lifeline;
