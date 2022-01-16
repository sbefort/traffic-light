import React from 'react';

const Circle = ({ color, isActive }) => {
  const classNames=['circle'];
  if (isActive) classNames.push(color);
  return (
    <div className={classNames.join(' ')} />
  );
}

export default Circle;
