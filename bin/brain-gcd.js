#!/usr/bin/env node

import { getUserName } from '../src/cli.js'

import runGcd from '../src/games/gcd.js'

const name = getUserName()
runGcd(name)
