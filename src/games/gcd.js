import genRandomNumber from '../randomNum.js';
import gameLogic from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  let absX = Math.abs(x);
  let absY = Math.abs(y);
  while (absY) {
    const temp = absY;
    absY = absX % absY;
    absX = temp;
  }
  return absX;
};

const min = 0;
const max = 100;

const startRound = () => {
  const firstNum = genRandomNumber(min, max);
  const secondNum = genRandomNumber(min, max);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = gcd(firstNum, secondNum);
  return [question, String(correctAnswer)];
};

export default () => gameLogic(startRound, rules);
