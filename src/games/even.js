import { runGame } from '../index.js'

import { getRandomInt } from '../utils.js'

const getQuestionAndAnswer = () => {
  const number = getRandomInt(1, 100)

  const answer = number % 2 === 0 ? 'yes' : 'no'
  return [String(number), answer]
}

export default (name) => {
  runGame(name, getQuestionAndAnswer, 'Answer "yes" if the number is even, otherwise answer "no".')
}

