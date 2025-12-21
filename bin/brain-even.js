#!/usr/bin/env node

import { getUserName } from '../src/cli.js';
import { runEvenGame } from '../src/even.js';

const name = getUserName();
runEvenGame(name);