// You are given an odd-length array of integers, 
// in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.


let arr = [1, 1, 5]

function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] != numbers[i]) {
                return numbers[j]
            }
        }
    }
}
console.log(stray(arr));