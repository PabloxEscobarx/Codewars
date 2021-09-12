// In this kata you will create a function
//  that takes a list of non-negative integers and strings and returns a new list 
//  with the strings filtered out.


let arr = [1, 2, 'a', 'b']

function fil(n) {
    let filtered = n.filter((i) => !isNaN(i));
    return filtered
};
console.log(fil(arr));