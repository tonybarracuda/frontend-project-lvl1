import genRandomNumber from "../randomNum.js";
import gameLogic from "../index.js";

const operator = ["+", "-", "*"];
const rules = "What is the result of the expression?";

// задаем в константах MIN и MAX значения для создания рандома
const min = 0;
const max = 100;

const startRound = () => {
	const a = genRandomNumber(min, max);
	const b = genRandomNumber(min, max);
	const rand = Math.floor(Math.random() * operator.length);
	const randomSym = operator[rand];
	const question = `${a}${randomSym}${b}`;
	let result = 0;
	switch (randomSym) {
		case "+":
			result = a + b;
			break;
		case "-":
			result = a - b;
			break;
		case "*":
			result = a * b;
			break;
		default:
			return false;
	}
	return [question, String(result)];
};

export default () => gameLogic(startRound, rules);
