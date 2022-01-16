import React from 'react';

const LightFrame = ({ children, isActive, onClick, className = '' }) => {
  const classNames = [className];
  if (!isActive) classNames.push('cursor-pointer')
  return (
    <div aria-label="traffic light" onClick={onClick} className={classNames.join(' ')}>
      { children }
    </div>
  );
}

export default LightFrame;
