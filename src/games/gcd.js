import genRandomNumber from '../randomNum.js';
import gameEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const numOne = 0;
const numTwo = 100;

const generateRound = () => {
  const firstNum = genRandomNumber(numOne, numTwo);
  const secondNum = genRandomNumber(numOne, numTwo);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = gcd(firstNum, secondNum);
  return [question, String(correctAnswer)];
};

export default () => gameEngine(generateRound, rules);
