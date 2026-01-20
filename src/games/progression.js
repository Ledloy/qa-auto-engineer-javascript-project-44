import { runGame } from '../index.js'

import { getRandomInt } from '../utils.js'

const DESCRIPTION = 'What number is missing in the progression?'
const PROGRESSION_LENGTH = 10

const buildProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const getTask = () => {
  const start = getRandomInt(1, 50)
  const step = getRandomInt(2, 10)
  const hiddenIndex = getRandomInt(0, PROGRESSION_LENGTH - 1)

  const progression = buildProgression(start, step, PROGRESSION_LENGTH)
  const answer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, answer]
}

export default () => {
  runGame(getTask, DESCRIPTION)
}
