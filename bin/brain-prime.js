#!/usr/bin/env node
import { getUserName } from '../src/cli.js'
import { runGame } from '../src/index.js'
import { getQuestionAndAnswer as getPrimeQA } from '../src/games/prime.js'
const name = getUserName()
runGame(name, getPrimeQA, 'Answer "yes" if given number is prime. Otherwise answer "no".')
