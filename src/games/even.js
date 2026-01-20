import { runGame } from '../index.js'

import { getRandomInt } from '../utils.js'

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (num) => num % 2 === 0

const getTask = () => {
  const num = getRandomInt(1, 100)
  const answer = isEven(num) ? 'yes' : 'no'
  return [String(num), answer]
}

export default () => {
  runGame(getTask, DESCRIPTION)
}
