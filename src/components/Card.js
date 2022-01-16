import React from 'react';

const Circle = ({ color, isActive }) => {
  return (
    <div className={`circle ${isActive ? color : ''}`} />
  );
}

export default Circle;
