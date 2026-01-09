// src/games/calc.js
export const getQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1
  const operations = ['+', '-', '*']
  const operation = operations[Math.floor(Math.random() * operations.length)]
  let correctAnswer
  switch (operation) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    case '*':
      correctAnswer = num1 * num2
      break
    default:
      throw new Error('Unknown operation')
  }
  const question = `${num1} ${operation} ${num2}`
  return [question, correctAnswer]
}
