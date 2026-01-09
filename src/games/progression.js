// src/games/progression.js
export const getQuestionAndAnswer = () => {
  const start = Math.floor(Math.random() * 50) + 1 // от 1 до 50
  const step = Math.floor(Math.random() * 20) + 1 // от 1 до 20
  const length = Math.floor(Math.random() * 6) + 5 // от 5 до 10
  // Генерируем прогрессию
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  // Случайная позиция для скрытого числа
  const hiddenIndex = Math.floor(Math.random() * length)
  const correctAnswer = String(progression[hiddenIndex])
  // Заменяем скрытое число на ".."
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  return [question, correctAnswer]
}
