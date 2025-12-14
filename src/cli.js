import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const readlineSync = require('readline-sync');

export const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};