// src/even.js

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const readlineSync = require('readline-sync');

const isEven = (num) => num % 2 === 0;

export const runEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};