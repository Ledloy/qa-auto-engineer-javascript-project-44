#!/usr/bin/env node
import { getUserName } from '../src/cli.js'
import { runGame } from '../src/index.js'
import { getQuestionAndAnswer as getProgressionQA } from '../src/games/progression.js'
const name = getUserName()
runGame(name, getProgressionQA, 'What number is missing in the progression?')
