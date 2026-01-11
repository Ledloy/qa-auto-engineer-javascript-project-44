import { getUserName } from '../cli.js'

import { runGame } from '../index.js'

import { getRandomInt } from '../utils.js'

const getQuestionAndAnswer = () => {
  const length = 10

  const start = getRandomInt(1, 50)

  const step = getRandomInt(2, 10)

  const hiddenIndex = getRandomInt(0, length - 1)

  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  const answer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  return [question, answer]
}

const runProgression = () => {
  const name = getUserName()
  runGame(name, getQuestionAndAnswer, 'What number is missing in the progression?')
}
export default runProgression
export { getQuestionAndAnswer }
