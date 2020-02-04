/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        // get index of string
        const key = getIndexOfString(strs[i]);
        if (map.has(key)) {
            const value = map.get(key);
            value.push(strs[i]);
            map.set(key, value);
        } else {
            map.set(key, [strs[i]]);
        }
    }
    return Array.from(map.values());
};

const getIndexOfString = (string)=>{
    const array = new Array(26).fill(0);
    for (let i = 0; i < string.length; i++) {
        const index = string[i].charCodeAt() - 97;
        array[index] = array[index] + 1;
    }
    return array.join('#');
}

console.log(groupAnagrams(['abc', 'xyz', 'cba', 'zyx', 'bca']));