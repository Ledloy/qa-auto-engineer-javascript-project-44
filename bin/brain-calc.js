#!/usr/bin/env node
import { getUserName } from '../src/cli.js'
import { runGame } from '../src/index.js'
import { getQuestionAndAnswer as getCalcQA } from '../src/games/calc.js'
const name = getUserName()
runGame(name, getCalcQA, 'What is the result of the expression?')
