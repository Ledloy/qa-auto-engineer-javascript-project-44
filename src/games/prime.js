// src/games/prime.js

export const getQuestionAndAnswer = () => {
  const number = Math.floor(Math.random() * 100) + 1;

  // Проверка, простое ли число
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};