import { runGame } from '../index.js'
import { getRandomInt } from '../utils.js'

const DESCRIPTION = 'What is the result of the expression?'
const OPERATORS = ['+', '-', '*']

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: throw new Error(`Unknown operator: ${operator}`)
  }
}

const getTask = () => {
  const num1 = getRandomInt(1, 50)
  const num2 = getRandomInt(1, 50)
  const operator = OPERATORS[getRandomInt(0, OPERATORS.length - 1)]
  const question = `${num1} ${operator} ${num2}`
  const answer = String(calculate(num1, num2, operator))
  return [question, answer]
}

export default () => {
  runGame(getTask, DESCRIPTION)
}
