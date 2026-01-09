#!/usr/bin/env node

import { getUserName } from '../src/cli.js';
import { runGame } from '../src/index.js'; 
import { getQuestionAndAnswer as getEvenQA } from '../src/games/even.js';
import { getQuestionAndAnswer as getCalcQA } from '../src/games/calc.js';
import { getQuestionAndAnswer as getGcdQA } from '../src/games/gcd.js';
import { getQuestionAndAnswer as getProgressionQA } from '../src/games/progression.js';

const name = getUserName();
const game = process.argv[2];

if (!game) {
  console.log('Usage: brain-games [even|calc|progression]');
  process.exit(1);
}

switch (game) {
  case 'even':
    runGame(name, getEvenQA, 'Answer "yes" if the number is even, otherwise answer "no".');
    break;
  case 'calc':
    runGame(name, getCalcQA, 'What is the result of the expression?');
    break;
  case 'gcd':
    runGame(name, getGcdQA, 'Find the greatest common divisor of given numbers.');
    break;
  case 'progression':
    runGame(name, getProgressionQA, 'What number is missing in the progression?');
    break;
  default:
    console.log('Unknown game. Available games: even, calc, gcd, progression');
    process.exit(1);
}