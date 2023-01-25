//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/885169434/
function twoSum(nums: number[], target: number): number[] {
    let left : number= 0;
    let right : number = nums.length - 1;
    while(left < right)
    {
        const sum : number = nums[left] + nums[right];
        if(sum == target)
        {
            return [left + 1, right + 1];
        }
        else if (sum > target)
        {
            right--;
        }
        else
        {
            left++;
        }
    }
    return [];
};