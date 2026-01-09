#!/usr/bin/env node

import { getUserName } from '../src/cli.js';
import { runGame } from '../src/index.js';
import { getQuestionAndAnswer as getEvenQA } from '../src/games/even.js';

const name = getUserName();
runGame(name, getEvenQA, 'Answer "yes" if the number is even, otherwise answer "no".');