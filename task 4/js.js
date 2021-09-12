function getMiddle(s) {
    let arr = s.split('')

    for (let i = 0; i <= arr.length - 1; i++) {
        if (i % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}
getMiddle("test")