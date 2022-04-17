#!/usr/bin/env node

import readlineSync from "readline-sync";

const startGame = () => {
	console.log("Welcome to the Brain Games!");
	const userName = readlineSync.question("May I have your name? ");
	console.log(`Hello, ${userName}!`);

	const gameEven = () => {
		console.log('Answer "yes" if the number is even, otherwise answer "no".');
		const firstNum = 15;
		const firstQ = readlineSync.question(
			`Question: ${firstNum} \nYour answer: `
		);
		if (firstQ === "no") {
			console.log("Correct!");
		} else {
			console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
			console.log(`Let's try again, ${userName}`);
		}
	};
	gameEven();
};

startGame();
