let arr = [1, 2, 'a', 'b', '1']

function fil(n) {
    let filtered = n.filter((i) => Number.isInteger(i));
    return filtered
};
console.log(fil(arr));