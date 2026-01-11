import { getUserName } from '../cli.js'

import { runGame } from '../index.js'

import { getRandomInt } from '../utils.js'

const getRandomOperator = () => ['+', '-', '*'][getRandomInt(0, 2)]

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: throw new Error(`Unknown operator: ${operator}`)
  }
}

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 50)

  const num2 = getRandomInt(1, 50)

  const operator = getRandomOperator()

  const question = `${num1} ${operator} ${num2}`

  const answer = String(calculate(num1, num2, operator))
  return [question, answer]
}

const runCalc = () => {
  const name = getUserName()
  runGame(name, getQuestionAndAnswer, 'What is the result of the expression?')
}
export default runCalc
export { getQuestionAndAnswer }
