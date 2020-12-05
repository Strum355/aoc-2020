import * as readline from 'readline'
import * as fs from 'fs'

const reader = readline.createInterface(fs.createReadStream('part1.txt'))

const expectedFields = new Set([
  'byr','iyr','eyr','hgt','hcl','ecl','pid',
])

async function process() {
  let expectedFieldsCount = 0
  let valid = 0
  for await (const line of reader) {
    if(line != '') {
      line.split(' ').forEach((kv) => {
        const key = kv.split(':')[0]
        if(expectedFields.has(key)) expectedFieldsCount++
      })
    } else {
      if(expectedFieldsCount == expectedFields.size) valid++
      expectedFieldsCount = 0
    }
  }
  if(expectedFieldsCount == expectedFields.size) valid++
  console.log(valid)
}

process()