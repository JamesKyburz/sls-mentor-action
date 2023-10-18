'use strict'

import process from "node:process"

const input = name => `INPUT_${name.toUpperCase()}`

const {
  [input('aws-region')]: region,
  [input('tags')]: tags,
  [input('level')]: level,
  [input('cloudformation-stacks')]: stacks,
  [input('no-fail')]: noFail,
  [input('report')]: report
} = process.env

const addArgument = (...args) => process.argv.push(...args)

addArgument('--aws-region', region)
addArgument('--level', level)

if (tags) addArgument('--tags', tags)
if (stacks) addArgument('--cloudformation-stacks', stacks)
if (noFail === 'true') addArgument('--noFail')
if (report === 'true') addArgument('--report')

require('sls-mentor')
