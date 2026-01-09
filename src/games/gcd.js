// src/games/gcd.js

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

export const getQuestionAndAnswer = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);
  return [question, correctAnswer];
};