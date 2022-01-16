import React from 'react';

const Rectangle = ({ children, isActive, onClick, className = '' }) => {
  return (
    <div onClick={onClick} className={`${className} ${isActive ? '' : 'cursor-pointer'}`}>
      { children }
    </div>
  );
}

export default Rectangle;
