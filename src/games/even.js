import { runGame } from '../index.js'
import { getRandomInt } from '../utils.js'

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (num) => num % 2 === 0

const getTask = () => {
  const number = getRandomInt(1, 100)
  const answer = isEven(number) ? 'yes' : 'no'
  return [String(number), answer]
}

export default () => {
  runGame(getTask, DESCRIPTION)
}
