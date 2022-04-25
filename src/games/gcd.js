import genRandomNumber from '../randomNum.js';
import gameEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const min = 0;
const max = 100;

const startGame = () => {
  const firstNum = genRandomNumber(min, max);
  const secondNum = genRandomNumber(min, max);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = gcd(firstNum, secondNum);
  return [question, String(correctAnswer)];
};

export default () => gameEngine(startGame, rules);
