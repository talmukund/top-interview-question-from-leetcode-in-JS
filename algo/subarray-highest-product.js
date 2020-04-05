/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let highestSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        highestSum = Math.max(highestSum, nums[i], nums[i]*currentSum);
        currentSum = currentSum ? nums[i]*currentSum: nums[i];
    }

    let highestSumReverse = nums[nums.length -1];
    let currentSumReverse = nums[nums.length -1];
    
    for (let i = nums.length - 2; i > 0; i--) {
        highestSumReverse = Math.max(highestSumReverse, nums[i], nums[i]*currentSumReverse);
        currentSumReverse = currentSumReverse ? nums[i]*currentSumReverse: nums[i];
    }

    const result = Math.max(highestSum, highestSumReverse);
    console.log(result);
};
let nums = [-1,-2,-3,0]
maxProduct(nums);
// maxProduct(nums.reverse());s