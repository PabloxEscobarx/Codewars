// Your task is to make a function that can take any non-negative integer as 
// an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421


function descendingOrder(n) {
    if (n == undefined) {
        return 0
    }
    let arr = n.toString().split('').sort().reverse().reduce((acc, current) => acc + current);

    return Number(arr)
};
console.log(descendingOrder(0));