//Question
//Count the number of set bits in a number


let input = 16


let count = 0
while (input) {
    input &= (input - 1);
    count++;
}

console.log(count)

