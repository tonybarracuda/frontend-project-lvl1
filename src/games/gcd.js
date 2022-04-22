import genRandomNumber from "../randomNum.js";
import gameLogic from "../index.js";

// правила мини-игры
const rules = "Find the greatest common divisor of given numbers.";

// пишем функцию условия раунда для определения верного ответа
const gcd = (a, b) => {
	if (a == 0) return b;
	while (b != 0) {
		if (a > b) {
			a = a - b;
		} else {
			b = b - a;
		}
	}
	return a;
};

// задаем в константах MIN и MAX значения для создания рандома
const min = 0;
const max = 100;

// функция раунда игры для вывода верного ответа
const startRound = () => {
	const firstNum = genRandomNumber(min, max);
	const secondNum = genRandomNumber(min, max);
	const question = `${firstNum} ${secondNum}`;
	const correctAnswer = gcd(firstNum, secondNum);
	return [question, String(correctAnswer)]; //экспорт переменных в корневую логику игры
};

// экспорт раунда в корневую игровую логику
export default () => gameLogic(startRound, rules);
