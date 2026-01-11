import { getUserName } from '../cli.js'

import { runGame } from '../index.js'

import { getRandomInt } from '../utils.js'

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 100)

  const num2 = getRandomInt(1, 100)

  const question = `${num1} ${num2}`

  const answer = String(gcd(num1, num2))
  return [question, answer]
}

const runGcd = () => {
  const name = getUserName()
  runGame(name, getQuestionAndAnswer, 'Find the greatest common divisor of given numbers.')
}
export default runGcd
export { getQuestionAndAnswer }
