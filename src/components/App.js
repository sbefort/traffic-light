import React, { useState } from 'react';
import LightFrame from './LightFrame';
import Light from './Light';
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
        <LightFrame isActive={isActive} onClick={initStoplight} className="bg-black rounded mt-3">
          {lightColors.map((color) => (
            <Light key={color} color={color} isActive={activeLight === color} />
          ))}
        </LightFrame>
      </div>
      {isActive && (
        <div className="d-flex justify-content-center">
          <Button onClick={changeLight} className="mx-auto mt-2">Change!</Button>
        </div>
      )}
      <Settings mode={mode} setMode={setMode} />
    </>
    
  )
}

export default App;
