import fetchLight from '../services/fetchLight';

test('When mode is set to sequential, lights should change from green to yellow to red', async () => {
  let newLight;

  newLight = await fetchLight('red', 'sequential');
  expect(newLight).toBe('green');

  newLight = await fetchLight('green', 'sequential');
  expect(newLight).toBe('yellow');

  newLight = await fetchLight('yellow', 'sequential');
  expect(newLight).toBe('red');

  newLight = await fetchLight('none', 'sequential');
  expect(['red', 'yellow', 'green'].includes(newLight)).toBe(true);
});

test('When mode is set to random, light change should never return the same color as the current color', async () => {
  let newLight;

  newLight = await fetchLight('green', 'random');
  expect(['yellow', 'red'].includes(newLight)).toBe(true);

  newLight = await fetchLight('yellow', 'random');
  expect(['red', 'green'].includes(newLight)).toBe(true);

  newLight = await fetchLight('red', 'random');
  expect(['green', 'yellow'].includes(newLight)).toBe(true);
});