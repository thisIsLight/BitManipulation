//Question
//You are triplet array and you need to find the one non repeating elelent


//Solution

const findNonRepeating = (arr, k) => {
    let res = 0
    let count = new Array(32).fill(0)

    for(let i=0;i<arr.length;i++){
        let val = arr[i]
        let index = 31
        while(val){
            count[index] += val & 1
            val = val >> 1
            index--
        }
    }

    for(let i=0;i<count.length;i++){
        count[i] = count[i]%k
    }

    console.log(parseInt(count.join(''), 2))
}


//Inputs

let input = [1,1,1,3,3,3,5,5,5,7]
let freqs = 3

findNonRepeating(input, freqs)