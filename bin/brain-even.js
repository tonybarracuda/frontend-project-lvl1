#!/usr/bin/env node

import readlineSync from 'readline-sync';

const genRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = genRandomNumber(0, 100);
    const userAnswer = readlineSync.question(
      `Question: ${number} \nYour answer: `,
    );
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');

    console.log(`Congratulations, ${userName}!`);
  }
};

startGame();
