//Question
//Make the currrent bit as 0


let input = 5   ///101
let pos = 2    ///0 indexed

//check if the bit is 0
let temp = 1 << pos

console.log(~temp & input)