#!/usr/bin/env node

import { getUserName } from '../src/cli.js'

import runProgression from '../src/games/progression.js'

const name = getUserName()
runProgression(name)
