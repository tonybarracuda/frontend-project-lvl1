import genRandomNumber from '../randomNum.js';
import gameEngine from '../index.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operator = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * operator.length);
  const randomSym = operator[rand];
  return randomSym;
};

const min = 0;
const max = 100;

const calc = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'format is not supported';
  }
};

const generateRound = () => {
  const num1 = genRandomNumber(min, max);
  const num2 = genRandomNumber(min, max);
  const mathOperator = getRandomOperator();
  const question = `Question: ${num1} ${mathOperator} ${num2}`;
  const correctAnswer = calc(num1, mathOperator, num2);
  return [question, String(correctAnswer)];
};

export default () => gameEngine(generateRound, rules);
