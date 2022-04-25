import genRandomNumber from '../randomNum.js';
import gameEngine from '../index.js';

const operator = ['+', '-', '*'];
const rules = 'What is the result of the expression?';
const min = 0;
const max = 100;

const calc = () => {
  const a = genRandomNumber(min, max);
  const b = genRandomNumber(min, max);
  const rand = Math.floor(Math.random() * operator.length);
  const randomSym = operator[rand];
  const question = `${a} ${randomSym} ${b}`;
  let result = 0;
  switch (randomSym) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      return 'format is not supported';
  }
  return [question, String(result)];
};

const startGame = () => calc();

export default () => gameEngine(startGame, rules);
