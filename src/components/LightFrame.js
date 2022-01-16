import React from 'react';

const LightFrame = ({ children, isActive, onClick, className = '' }) => {
  return (
    <div onClick={onClick} className={`${className} ${isActive ? '' : 'cursor-pointer'}`}>
      { children }
    </div>
  );
}

export default LightFrame;
