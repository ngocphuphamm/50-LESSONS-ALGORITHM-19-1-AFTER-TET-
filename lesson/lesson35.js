// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
// vertical method
var longestCommonPrefix = function(strs = ["flower","flow","flight"]) {
    let prefix = "";
    for(let i = 0; i < strs[0].length; i++) {
        const characters = strs[0][i];
        for(let j = 0; j < strs.length;j++)
        {
            if(characters !== strs[j][i])
            {
                return prefix;
            }
        }
        prefix = prefix + characters;
    }
};
console.log(longestCommonPrefix());