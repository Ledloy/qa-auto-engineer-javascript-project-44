#!/usr/bin/env node

import { getUserName } from '../src/cli.js'

import runCalc from '../src/games/calc.js'

const name = getUserName()
runCalc(name)
