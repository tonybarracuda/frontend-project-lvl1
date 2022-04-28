import genRandomNumber from '../randomNum.js';
import gameEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const createProgression = (firstNumber, step, arrLength) => {
  const result = [];
  for (let i = firstNumber; result.length + 1 <= arrLength; i += step) {
    result.push(i);
  }
  return result;
};

const generateRound = () => {
  const firstNumber = genRandomNumber(-10, 10);
  const step = genRandomNumber(1, 10);
  const arrLength = genRandomNumber(6, 10);
  const initialProgression = createProgression(firstNumber, step, arrLength);

  const getRandomItem = initialProgression[Math.floor(Math.random() * initialProgression.length)];

  const progressionWithHiddenItem = (oldArr) => {
    const newArray = oldArr;
    const indexOfArr = oldArr.indexOf(getRandomItem);
    const hiddenElement = '..';
    newArray[indexOfArr] = hiddenElement;
    return newArray;
  };
  const question = progressionWithHiddenItem(
    createProgression(firstNumber, step, arrLength),
  ).join(' ');
  const correctAnswer = getRandomItem;
  return [question, String(correctAnswer)];
};

export default () => gameEngine(generateRound, rules);
