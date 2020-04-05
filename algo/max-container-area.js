/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let ptr1 = 0;
    let ptr2 = height.length-1;
    let maxLength = 0
    while (ptr1 < ptr2) {
        const tempLength = Math.min(height[ptr2], height[ptr1]) * (ptr2-ptr1);
        if (tempLength > maxLength) {
            maxLength = tempLength;
        }
        if (height[ptr1] < height[ptr2]) {
            ptr1 ++;
        } else {
            ptr2--;
        }
    }
    return maxLength;
};

console.log(maxArea([1,8,6,2,4,5,9,7]));

