/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ptr1 = 1;
    let ptr2 = 1;
    let currLength = 0;
    let hashTable = {};

    for (let i = 1; i < s.length + 1; i++) {
        const element = s[i-1];
        // check if element in hash table
        if (hashTable[element] && hashTable[element] >= ptr1) {
            ptr1 = hashTable[element] + 1;
        }
        hashTable[element] = i;
        ptr2 ++;
        if (currLength < ptr2 -ptr1) {
            currLength = ptr2 - ptr1;
        }
    }
    return currLength;
};

console.log(lengthOfLongestSubstring("abba"))