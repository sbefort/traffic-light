import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  const classNames = ['btn', 'cursor-pointer'];
  if (className) classNames.push(className);
  return (
    <button className={classNames.join(' ')} type="button" onClick={onClick}>{ children }</button>
  );
}

export default Button;
