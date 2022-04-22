import genRandomNumber from "../randomNum.js";
import gameLogic from "../index.js";

const isEven = (number) => number % 2 === 0;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

// задаем в константах MIN и MAX значения для создания рандома, чтобы не прописывать эт каждый раз в игре
const min = 0;
const max = 100;

const startRound = () => {
	const question = genRandomNumber(min, max);
	const correctAnswer = isEven(question) ? "yes" : "no";
	return [question, correctAnswer]; //экспорт
};

export default () => gameLogic(startRound, rules);
