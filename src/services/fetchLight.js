export const lightColors = ['red', 'yellow', 'green'];

const randomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const sequentialLight = (currentColor) => {
  return new Promise((resolve, reject) => {
    switch (currentColor) {
      case 'red':
        resolve('green');
        break;

      case 'yellow':
        resolve('red');
        break;
  
      case 'green':
        resolve('yellow');
        break;

      default:
        resolve(randomElement(lightColors));
        break;
    }
  });
}

const randomLight = (currentColor) => {
  return new Promise((resolve, reject) => {
    resolve(randomElement(lightColors.filter((color) => color !== currentColor)));
  });
};

export default function fetchLight(currentColor, mode) {
  if (mode === 'random') {
    return randomLight(currentColor);
  } else {
    return sequentialLight(currentColor);
  }
}
