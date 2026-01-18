import { runGame } from '../index.js'
import { getRandomInt } from '../utils.js'

const DESCRIPTION = 'Find the greatest common divisor of given numbers.'

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b))

const getTask = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)
  const question = `${num1} ${num2}`
  const answer = String(getGcd(num1, num2))
  return [question, answer]
}

export default () => {
  runGame(getTask, DESCRIPTION)
}
