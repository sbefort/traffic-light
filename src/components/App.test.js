import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { lightColors } from '../services/fetchLight';

test('does not render change light button on mount', () => {
  render(<App />);
  const button = screen.queryByText(/Change!/i);
  expect(button).toBeNull();
});

test('three lights should be white on mount', () => {
  render(<App />);
  lightColors.map((color) => (
    expect(screen.getByLabelText(`${color} light`).className).toBe('circle')
  ));
});

test('one light should be lit on first click of traffic light', async () => {
  render(<App />);
  const lightFrame = screen.getByLabelText('traffic light');
  userEvent.click(lightFrame);
  await waitFor(() => {
    const lights = lightColors.map((color) => screen.getByLabelText(`${color} light`));
    const whiteLights = lights.filter((light) => light.className === 'circle');
    expect(whiteLights.length).toBe(2);
  });
});

test('subsequent clicks on traffic light will have no effect.', async () => {
  render(<App />);
  const lightFrame = screen.getByLabelText('traffic light');
  userEvent.click(lightFrame);

  let randomLight;
  await waitFor(() => {
    const lights = lightColors.map((color) => screen.getByLabelText(`${color} light`));
    randomLight = lights.find((light) => light.className !== 'circle');
    // When a random light is lit, one light should have one of the three classes in the array below
    expect(['circle red', 'circle yellow', 'circle green'].includes(randomLight.className)).toBe(true);
  });

  userEvent.click(lightFrame);
  await waitFor(() => {
    const lights = lightColors.map((color) => screen.getByLabelText(`${color} light`));
    const newRandomLight = lights.find((light) => light.className !== 'circle');
    // When clicked again and again, the randomly lit light on first click should remain unchanged
    expect(newRandomLight.className).toBe(randomLight.className);
  });
});
