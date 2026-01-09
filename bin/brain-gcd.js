#!/usr/bin/env node
import { getUserName } from '../src/cli.js'
import { runGame } from '../src/index.js'
import { getQuestionAndAnswer as getGcdQA } from '../src/games/gcd.js'
const name = getUserName()
runGame(name, getGcdQA, 'Find the greatest common divisor of given numbers.')
