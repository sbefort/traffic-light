export const lightColors = ['red', 'yellow', 'green'];

const randomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const sequentialLight = (currentColor) => {
  return new Promise((resolve, reject) => {
    switch (currentColor) {
      case 'red':
        resolve('yellow');
        break;

      case 'yellow':
        resolve('green');
        break;
  
      case 'green':
        resolve('red');
        break;

      default:
        resolve(randomElement(lightColors));
        break;
    }
  });
}

const randomLight = (currentColor) => {
  const newColor = randomElement(lightColors);
  // After choosing a random color, if it is equal to the current color, choose again.
  if (newColor === currentColor) return randomLight(currentColor);
  return new Promise((resolve, reject) => {
    resolve(newColor);
  });
};

export default function fetchLight(currentColor, mode) {
  if (mode === 'random') {
    return randomLight(currentColor);
  } else {
    return sequentialLight(currentColor);
  }
}
