#!/usr/bin/env node

import readlineSync from "readline-sync";

const genRandomNumber = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const operator = ["+", "-", "*"];

const game = () => {
	console.log("Welcome to the Brain Games!");
	const userName = readlineSync.question("May I have your name? ");
	console.log(`Hello, ${userName}!`);
	console.log("What is the result of the expression?");

	for (let i = 0; i < 3; i += 1) {
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

		console.log(String(result));

		console.log(question);

		const userAnswer = readlineSync.question(
			`Question: ${question} \nYour answer: `
		);

		console.log(userAnswer);
		const r = String(result);
		const u = userAnswer;
		if (r !== u) {
			console.log(`${u} is wrong number ;(. Correct number is ${r}.`);
			return;
		}
		console.log("Correct!");

		console.log(`Congratulations, ${userName}!`);
	}
};

game();
