import * as readline from 'readline'
import * as fs from 'fs'

const reader = readline.createInterface(fs.createReadStream('part2.txt'))

const expectedFields = new Map([
  ['byr', (value: string) => { return parseInt(value) >= 1920 && parseInt(value) <= 2002 }],
  ['iyr', (value: string) => { return parseInt(value) >= 2010 && parseInt(value) <= 2020 }],
  ['eyr', (value: string) => { return parseInt(value) >= 2020 && parseInt(value) <= 2030 }],
  ['hgt', (value: string) => {
    if(value.endsWith('cm')) {
      const centi = parseInt(value.substring(0, value.length - 2))
      return centi >= 150 && centi <= 193
    } else if(value.endsWith('in')) {
      const inches = parseInt(value.substring(0, value.length - 2))
      return inches >= 59 && inches <= 76
    }
    return false
  }],
  ['hcl', (value: string) => /^#[a-f0-9]{6}$/.test(value)],
  ['ecl', (value: string) => new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']).has(value)],
  ['pid', (value: string) => /^\d{9}$/.test(value)],
])

async function process() {
  let expectedFieldsCount = 0
  let valid = 0
  for await (const line of reader) {
    if(line != '') {
      line.split(' ').forEach((kv) => {
        const [key, value] = kv.split(':')
        if(expectedFields.has(key) && expectedFields.get(key)!!(value)) expectedFieldsCount++
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