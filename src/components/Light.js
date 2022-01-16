import React from 'react';

const Light = ({ color, isActive, ariaLabel }) => {
  const classNames = ['circle'];
  if (isActive) classNames.push(color);
  return (
    <div aria-label={ariaLabel} className={classNames.join(' ')} />
  );
}

export default Light;
