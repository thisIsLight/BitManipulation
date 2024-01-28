//Question
//How many bits are needed to change a number a to b


let a = 7
let b = 1

let xor = a ^ b
let res = 0
while(xor){
    xor &= (xor-1)
    res++
}

console.log(res)