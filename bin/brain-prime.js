#!/usr/bin/env node

import { getUserName } from '../src/cli.js'

import runPrime from '../src/games/prime.js'

const name = getUserName()
runPrime(name)
