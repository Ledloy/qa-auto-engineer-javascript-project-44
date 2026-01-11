import { getUserName } from '../cli.js'

import { runGame } from '../index.js'

import { getRandomInt } from '../utils.js'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const getQuestionAndAnswer = () => {
  const number = getRandomInt(2, 100)

  const answer = isPrime(number) ? 'yes' : 'no'
  return [String(number), answer]
}

const runPrime = () => {
  const name = getUserName()
  runGame(name, getQuestionAndAnswer, 'Answer "yes" if given number is prime. Otherwise answer "no".')
}
export default runPrime
export { getQuestionAndAnswer }
