import React from 'react';

const Button = ({ id, value, isChecked, onChange, label, helpText, className = '' }) => {
  return (
    <div className={className}>
      <input className="cursor-pointer" id={id} type="radio" value={value} checked={isChecked} onChange={onChange} />
      <label className="cursor-pointer" htmlFor={id}>{ label }</label>
      <p className="mt-1 font-small">{ helpText }</p>
    </div>
  );
}

export default Button;
