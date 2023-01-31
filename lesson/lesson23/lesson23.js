//https://leetcode.com/problems/next-permutation/description/



// 1. from at index last  find number decreasing  
// 2. from at index last find numbe increasing , substitution 


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums = [3,2,1])  {
   // 1. from at index last  find number decreasing  
    let i = nums.length - 2;

    while(i >= 0 && nums[i] >= nums[i + 1]) i--;

    if(i >= 0)
    {
        // 2. from at index last find numbe increasing , substitution 
        let j = nums.length - 1;
        while(j >= 0 && nums[j] <= nums[i]) j--;
        swap(nums, i, j);
    }
    reverse(nums, i +1);
    return nums;
};

function reverse(nums, start)
{
    let end = nums.length - 1;
    while(start < end)
    {
        swap(nums, start, end);
        start++;
        end--;
    }
}

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}




nextPermutation()