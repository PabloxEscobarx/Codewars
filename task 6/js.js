// An isogram is a word that has no repeating letters,
//  consecutive or non-consecutive. 
//  Implement a function that determines whether a string that contains only letters is an isogram. 
//  Assume the empty string is an isogram. Ignore letter case.

let str = "Dermatoglyphics"; // true

let str2 = '' //true

let str3 = "moOse" // false

function isIsogram(str) {
    if (str == '') {
        return true
    }
    let anag = str.toLowerCase()
    let set = [...new Set(anag)];
    if (set.join('') === anag) {
        return true
    } else { return false }
};
isIsogram(str)