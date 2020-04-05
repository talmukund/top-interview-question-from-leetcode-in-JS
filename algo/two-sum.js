/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var twoSum = function(nums, k) {
    let hash = {};
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    }

    // for complement
    for (let i = 0; i < nums.length; i++) {
        const value = k-nums[i];
        if (hash[value] && hash[value] !== i) {
            return [i, hash[value]];
        }
    }
    return arr;
};

console.log(twoSum([2, 7, 11, 15], 9));