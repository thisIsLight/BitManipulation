//Question
//You are given a number and you need to find if a bit at a particular position is 1


let input = 2
let pos = 2

//left shift 1 by 2
let temp = 1
temp = temp << 1

console.log(temp)

//And the left shifted value
let res = temp & input

console.log(res == 0 ? 0 : 1)