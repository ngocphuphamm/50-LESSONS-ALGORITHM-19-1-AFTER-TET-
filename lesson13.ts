//https://leetcode.com/problems/top-k-frequent-elements/description/
function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    const result = [];
    for(let i = 0; i < nums.length; i++)
    {
        if(!map.has(nums[i]))
        {
            map.set(nums[i], 1);
            continue;
        }
        map.set(nums[i], map.get(nums[i]) + 1);
    }
    let arrMap = [...map.entries()].sort((a, b) => a[1] - b[1]);
    let count = 0;
    for(let i = arrMap.length - 1 ; count < k; i--, count++)
    {
        result.push(arrMap[i][0]);
    }
    return result 
};