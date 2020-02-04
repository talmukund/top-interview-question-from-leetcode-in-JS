/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    
};

const backTracking = (arr, curr, open, close, max)=>{
    if (curr.length === max) {
        arr.push(curr);
        return;
    }
    if (open < max) {
        backTracking(arr, curr+"(", open +1, close, max);
    }
    if (close < open) {
        backTracking(arr, curr+")", open, close+1, max);
    }
};