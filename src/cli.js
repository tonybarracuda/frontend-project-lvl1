import readlineSync from 'readline-sync';

// greeting
console.log("Welcome to the Brain Games!");

// Wait for user's response.
export const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
