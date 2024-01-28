//Question
//You are given an array which has paried inputs and two non repeating inputs


//Solution

const findNonRepeating = (arr) => {
    let res = 0

    for(let i=0;i<arr.length;i++){
        res = res ^ arr[i]
    }
    let rescopy = res
    let lastbit = res & 1 == 0 ? 0 : 1

    let sameaslast = []

    for(let i=0;i<arr.length;i++){
        if(arr[i] & 1 == lastbit){
            sameaslast.push(arr[i])
        }
    }

    console.log(sameaslast)

    for(let i=0;i<sameaslast.length;i++){
        res = res ^ sameaslast[i]
    }

    let ans = [res]
    ans.push(rescopy^res)


    return ans
}


//Inptus

let input = [1,2,4,5,4,1,5,7]

console.log(findNonRepeating(input))