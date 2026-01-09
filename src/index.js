// src/index.js
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const readlineSync = require('readline-sync')
const ROUNDS_COUNT = 3
export const runGame = (name, getQuestionAndAnswer, description) => {
  console.log(description)
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').trim()
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!')
    } 
      else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
