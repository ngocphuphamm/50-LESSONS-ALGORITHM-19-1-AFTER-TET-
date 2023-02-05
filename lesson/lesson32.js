//https://leetcode.com/problems/find-all-anagrams-in-a-string/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s = "cbaebabacd", p = "abc") {
    const mapP = new Map();

    const m = s.length;
    const n = p.length;
    for(let i = 0; i < n; i++) {
        if(!mapP.has(p[i]))
        {
            mapP.set(p[i], 1);
            continue;
        }
        mapP.set(p[i], mapP.get(p[i]) + 1);
    }

    let result = [];
    for(let  i = 0; i <= m - n; i++) {
        const tmpMap = new Map(mapP);
        let j = 0 
        for(j = i ; j < i + n; j++)
        {
            if(tmpMap.has(s[j]) && tmpMap.get(s[j]) > 0)
            {
                tmpMap.set(s[j], tmpMap.get(s[j]) - 1)
            }
            else break;
        }

        if(j === i + n)
        {

            result.push(i);
        }
    }   
    return result;
};

console.log(findAnagrams());