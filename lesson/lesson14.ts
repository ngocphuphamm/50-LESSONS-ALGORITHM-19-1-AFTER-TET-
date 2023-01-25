//https://leetcode.com/problems/kth-largest-element-in-an-array/description/
function findKthLargest(nums: number[], k: number): number {
    nums.sort((a : number, b: number) => a-b);
    let count = k ;
    let i = nums.length - 1;
    let maxK = nums[nums.length - 1];
    while(count >= 1 && i >= 0)
    {
        if(nums[i] <= maxK)
        {
            maxK = nums[i];
            count --;
        }
        i--;
    }
    return maxK;
};