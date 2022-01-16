import React from 'react';

const Light = ({ color, isActive }) => {
  return (
    <div className={`circle ${isActive ? color : ''}`} />
  );
}

export default Light;
