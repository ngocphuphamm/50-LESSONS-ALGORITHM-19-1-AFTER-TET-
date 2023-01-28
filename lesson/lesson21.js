
//https://leetcode.com/problems/reverse-integer/description/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let revNum = 0, lastDigit = 0;
    while (x!==0) {
        lastDigit = x % 10; 
        x = parseInt(x/10); 
        revNum = revNum * 10 + lastDigit;
        // warning overflow 
        if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0
    }
    return revNum
};