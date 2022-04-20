import genRandomNumber from "../randomNum.js";
import gameLogic from "../index.js";

const operator = ["+", "-", "*"];
const rules = "What is the result of the expression?";

const startRound = () => {
	const a = genRandomNumber(0, 100);
	const b = genRandomNumber(0, 100);
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
