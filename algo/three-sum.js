/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // set pointer to 1 and do two sum
    console.time("time consumed");
    let ptr1 = 0;
    let arr = [];
    let hashTable = [];
    let nonDuplicateResult = {};
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        hashTable[nums[i]] = i;
    }
    while (ptr1 <length) {
        let ptr1Value = nums[ptr1];
        for (let i = ptr1+1; i < length; i++) {
            const elem = nums[i];
            let reqValue = -(ptr1Value + elem);
            reqValue = reqValue === 0 ? 0: reqValue;
            let value = hashTable[reqValue];
            if (value && value > i && value > ptr1) {
                const result = [ptr1Value, elem, parseInt(reqValue)].sort();
                const key = result.join(',');
                if (!nonDuplicateResult[key]) {
                    // nonDuplicateResult
                    arr.push(result);
                    nonDuplicateResult[key] = true;    
                }
            }
        }
        ptr1 = ptr1+1;
    }
    console.timeEnd("time consumed");
    return arr;
};