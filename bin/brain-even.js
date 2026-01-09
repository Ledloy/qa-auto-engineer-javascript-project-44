#!/usr/bin/env node

import { getUserName } from '../src/cli.js';
import { runGame } from '../src/index.js';      // общий движок
import { getQuestionAndAnswer as getEvenQA } from '../src/games/even.js';

const name = getUserName();
runGame(name, getEvenQA);