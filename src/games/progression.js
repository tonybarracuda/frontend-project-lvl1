import genRandomNumber from "../randomNum.js";
import gameLogic from "../index.js";

const rules = "What number is missing in the progression?";
const firstNumber = genRandomNumber(-10, 10); // с какого числа начнется прогрессия
const step = genRandomNumber(1, 10); // генерруем шаг прогрессии
const arrLength = genRandomNumber(6, 10); // генерруем мин и макс длину генерируемой прогрессии

const arr = () => {
	// создаем арифметическую прогрессию
	let result = [];
	for (let i = firstNumber; result.length + 1 <= arrLength; i += step)
		result.push(i);
	return result;
};

const getRandomItem = arr()[Math.floor(Math.random() * arr().length)];

const newArr = (oldArr) => {
	// создаем арифметическую прогрессию со скрытой позицией
	const newArray = oldArr;
	const randomElement = getRandomItem;
	const indexOfArr = oldArr.indexOf(randomElement);
	const hiddenElement = `..`;
	newArray[indexOfArr] = hiddenElement;
	return newArray;
};

const startRound = () => {
	const question = newArr(arr()).join(" ");
	const correctAnswer = getRandomItem;
	return [question, String(correctAnswer)]; //экспорт переменных в корневую логику игры
};

export default () => gameLogic(startRound, rules);
