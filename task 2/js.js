let arr = [1, 1, 1, 1, 1, 1, 10, 3, 1, 1, 1, 1];

function findOdd(A) {

    let count = 0;
    let last;

    A.sort();

    for (let i = 0; i < A.length; i++) {
        if (A[i] === last) {
            count++;
            continue;
        }
        if (count % 2) return last;
        last = A[i];
        count = 1;
    }
    return last;
}

console.log(findOdd(arr));