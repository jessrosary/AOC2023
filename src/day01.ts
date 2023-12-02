const fs = require('node:fs');
const last = require('lodash/last');

//load in data
const data = fs.readFileSync('../data/day01.txt', 'utf8')
  .trim()
  .split('\n')
  .map((line) => {
    return Array.from(line)})

//remove non-numerals 
const onlyNums = data.map((arr) => {
  let nums = arr.filter((char) => !isNaN(parseInt(char)))
  return nums
})

//find first and last characters in array
const calibrationValues = onlyNums.map((arr) => {
  const firstNum = arr[0]
  const lastNum = last(arr)
  return parseInt(firstNum + lastNum)
})

//add all values in array to get result
const sumCalibrationValues = calibrationValues.reduce((int, prev) => int + prev)

//numeral strings
const numStrings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

