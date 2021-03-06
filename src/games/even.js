import genRandomNumber from '../randomNum.js';
import gameEngine from '../index.js';

const isEven = (number) => number % 2 === 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const min = 0;
const max = 100;

const generateRound = () => {
  const question = genRandomNumber(min, max);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameEngine(generateRound, rules);
