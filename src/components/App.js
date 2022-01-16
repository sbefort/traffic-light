import React, { useState } from 'react';
import Rectangle from './Rectangle';
import Circle from './Circle';
import Button from './Button';
import Settings from './Settings';
import fetchLight, { lightColors } from '../services/fetchLight';
import '../sass/styles.scss';

const App = () => {
  // Initial state of traffic light is inactive.
  // Traffic light becomes active on initial click.
  const [isActive, setIsActive] = useState(false);

  // Active light (red, yellow, green, or none).
  const [activeLight, setActiveLight] = useState('none');

  // Change the lights in sequential order or random order
  const [mode, setMode] = useState('sequential');

  const initStoplight = () => {
    if (isActive) return;
    setIsActive(true);
    changeLight();
  }

  const changeLight = async () => {
    setActiveLight(await fetchLight(activeLight, mode));
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Rectangle isActive={isActive} onClick={initStoplight} className="bg-black rounded mt-3">
          {lightColors.map((color) => (
            <Circle key={color} color={color} isActive={activeLight === color} />
          ))}
        </Rectangle>
      </div>
      {isActive && (
        <div className="d-flex justify-content-center">
          <Button onClick={changeLight} className="d-block mx-auto mt-2">Change!</Button>
        </div>
      )}
      <Settings mode={mode} setMode={setMode} />
    </>
    
  )
}

export default App;
