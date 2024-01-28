//Question
//You are given an array which has paried inputs and one non repeating inputs


//Solution

const findNonRepeating = (arr) => {
    let res = 0

    for(let i=0;i<arr.length;i++){
        res = res ^ arr[i]
    }

    return res
}


//Inptus

let input = [1,2,4,5,4,1,5]

console.log(findNonRepeating(input))