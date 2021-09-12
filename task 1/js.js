// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. 
// If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.


let num = 345;

function digital_root(n) {
    let arr = n.toString().split('').map((arr) => Number(arr));
    let sum = arr.reduce((accum, current) => accum + current);
    if (sum.toString().split('').length > 1) {
        return digital_root(sum)
    } else { return sum }
}
console.log(digital_root(num));