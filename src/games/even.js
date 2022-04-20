import genRandomNumber from "../randomNum.js";
import gameLogic from "../index.js";

const isEven = (number) => number % 2 === 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startRound = () => {
	const question = genRandomNumber(0, 100);
	const correctAnswer = isEven(question) ? "yes" : "no";
	return [question, correctAnswer]; //экспорт
};

export default () => gameLogic(startRound, rules);
