https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/
function lengthOfLongestSubstring(s: string): number {
    s.split("");
    if(s.length == 1) return 1;
    if(s.length == 0) return 0;
    const result = new Map();
    let max = 0;
    for(let i = 0; i < s.length; i++)
    {
        if(!result.has(s[i]))
            {
                result.set(s[i],i);
            }
        else
            {
                i = result.get(s[i]);
                result.clear();
            }
        max = Math.max(max,result.size);
    }
    return max;
};
