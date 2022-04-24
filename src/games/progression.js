import genRandomNumber from '../randomNum.js';
import gameLogic from '../index.js';

const rules = 'What number is missing in the progression?';

const startRound = () => {
  const firstNumber = genRandomNumber(-10, 10);
  const step = genRandomNumber(1, 10);
  const arrLength = genRandomNumber(6, 10);

  const createProgression = () => {
    const result = [];
    for (let i = firstNumber; result.length + 1 <= arrLength; i += step) {
      result.push(i);
    }
    return result;
  };

  const getRandomItem = createProgression()[Math.floor(Math.random() * createProgression().length)];

  const progressionWithHiddenItem = (oldArr) => {
    const newArray = oldArr;
    const indexOfArr = oldArr.indexOf(getRandomItem);
    const hiddenElement = '..';
    newArray[indexOfArr] = hiddenElement;
    return newArray;
  };
  const question = progressionWithHiddenItem(createProgression()).join(' ');
  const correctAnswer = getRandomItem;
  return [question, String(correctAnswer)];
};

export default () => gameLogic(startRound, rules);
