#!/usr/bin/env node

import { getGameName } from '../src/cli.js'

const gameName = getGameName()

if (!gameName) {
  console.log('Welcome to the Brain Games!')
  console.log('Please choose a game: even, calc, gcd, progression, prime')
  process.exit(0)
}

switch (gameName) {
  case 'even':
    import('../src/games/even.js').then(m => m.default())
    break
  case 'calc':
    import('../src/games/calc.js').then(m => m.default())
    break
  case 'gcd':
    import('../src/games/gcd.js').then(m => m.default())
    break
  case 'progression':
    import('../src/games/progression.js').then(m => m.default())
    break
  case 'prime':
    import('../src/games/prime.js').then(m => m.default())
    break
  default:
    console.log('Unknown game')
    process.exit(1)
}
