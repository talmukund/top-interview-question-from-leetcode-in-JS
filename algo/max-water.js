/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const leftArr = [];
    const rightArray = [];
    let length = 0;

    leftArr [0] = height[0];
    for (let i = 1; i < height.length; i++) {
        leftArr[i] = Math.max(height[i], leftArr[i-1]);
    }
    rightArray[height.length-1] = height[height.length-1];
    for (let i = height.length-2; i >= 0; i--) {
        rightArray[i] = Math.max(height[i], rightArray[i+1]);
    }

    for (let i = 0; i < height.length; i++) {
        length = length + Math.min(leftArr[i], rightArray[i])-height[i];
    }
    return length;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

