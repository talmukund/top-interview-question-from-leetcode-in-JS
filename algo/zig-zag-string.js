/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    

    if (numRows == 1) return s;

    let ret = "";
    let n = s.length;
    let cycleLen = 2 * numRows - 2;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += cycleLen) {
            ret = ret + s[j + i];
            if (i != 0 && i != numRows - 1 && j + cycleLen - i < n)
                ret = ret +s[j + cycleLen - i];
        }
    }
    return ret;


};