#!/usr/bin/env node

import { getUserName } from '../src/cli.js'
import { getGameName } from '../src/cli.js'

const name = getUserName() // ← используется!
const gameName = getGameName()

if (!gameName) {
  console.log('Please choose a game: even, calc, gcd, progression, prime')
  process.exit(0)
}

switch (gameName) {
  case 'even':
    import('../src/games/even.js').then(m => m.default(name))
    break
  case 'calc':
    import('../src/games/calc.js').then(m => m.default(name))
    break
  case 'gcd':
    import('../src/games/gcd.js').then(m => m.default(name))
    break
  case 'progression':
    import('../src/games/progression.js').then(m => m.default(name))
    break
  case 'prime':
    import('../src/games/prime.js').then(m => m.default(name))
    break
  default:
    console.log('Unknown game')
    process.exit(1)
}
