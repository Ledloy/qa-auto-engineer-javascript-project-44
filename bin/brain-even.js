#!/usr/bin/env node

import { getUserName } from '../src/cli.js'

import runEven from '../src/games/even.js'

const name = getUserName()
runEven(name)
