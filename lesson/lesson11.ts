// https://leetcode.com/problems/two-sum/description/
function twoSum1(nums: number[], target: number): number[] {
    const map = new Map <number, number>();
    for (let i = 1; i < nums.length; i++)
    {
        map.set(nums[i],i);
    }
    for(let i = 0; i < nums.length; i++)
    {
        const findElement : number = target - nums[i];
        if(map.has(findElement) && i !== map.get(findElement))
        {
            return [map.get(findElement),i];
        }
    }
    return [];
};