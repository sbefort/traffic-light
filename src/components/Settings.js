import React, { useState } from 'react';
import Button from './Button';
import RadioButton from './RadioButton';

const Settings = ({ mode, setMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    {
      value: 'sequential',
      label: 'Sequential',
      helpText: 'Change lights in sequential order from green to yellow to red.',
    },
    {
      value: 'random',
      label: 'Random',
      helpText: 'Change lights in random order.',
    },
  ]

  return (
    <div className="absolute-top-right">
      <div className="d-flex justify-content-end">
        <Button type="button" onClick={() => setIsOpen(!isOpen)} className="btn btn-vanilla">
          <span className="btn-icon">&#9881;</span>
        </Button>
      </div>
      <div className={`card ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="card-header d-flex justify-content-between">
          <h2>Light Mode</h2>
          <Button type="button" onClick={() => setIsOpen(false)} className="btn btn-vanilla">
            &#10006;
          </Button>
        </div>
        <div className="card-body">
        {options.map((option, i) => (
          <RadioButton
            key={option.value}
            id={`mode-${option.value}`}
            type="radio"
            value={option.value}
            label={option.label}
            isChecked={mode === option.value}
            className={i > 0 ? 'mt-3' : ''}
            onChange={(e) => setMode(e.target.value)}
            helpText={option.helpText}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
