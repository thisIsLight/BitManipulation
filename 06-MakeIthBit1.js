//Question
//Make Ith bit as 1

let input = 4 // 100
let pos = 0   // 0 based

let mask = 1
mask = mask << pos


console.log(input | mask)