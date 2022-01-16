import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button className={`btn cursor-pointer ${className}`} type="button" onClick={onClick}>{ children }</button>
  );
}

export default Button;
