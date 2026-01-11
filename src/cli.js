import readlineSync from 'readline-sync'

export const getUserName = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}
export const getGameName = () => {
  return process.argv[2]
}
