/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const map = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400:"CD",
        500: "D",
        900:"CM",
        1000: "M"
    }

    let result = "";
    Object.keys(map).reverse().forEach(key=>{
        const str = map[key];
        const times = parseInt(num/parseInt(key));
        result = result + getString(str, times);
        num = num%parseInt(key);
    }) ;

    return result;
};

const getString = (str, times)=>{
    let rStr = "";
    for (let i = 0; i < times; i++) {
        rStr = rStr + str;
    }
    return rStr;
}

intToRoman(49);