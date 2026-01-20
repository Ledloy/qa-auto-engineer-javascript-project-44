import { runGame } from '../index.js'

import { getRandomInt } from '../utils.js'

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num < 2) return false
  const limit = Math.sqrt(num)
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const getTask = () => {
  const num = getRandomInt(1, 100)
  const answer = isPrime(num) ? 'yes' : 'no'
  return [String(num), answer]
}

export default () => {
  runGame(getTask, DESCRIPTION)
}
