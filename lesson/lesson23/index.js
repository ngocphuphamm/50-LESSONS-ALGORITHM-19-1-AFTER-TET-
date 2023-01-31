// 1. from at index last  find number decreasing  
// 2. from at index last find numbe increasing , substitution 
// 3. swap between 1. , 2.
// 4. reverse

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums = [1,2,3])  {
    const n  = nums.length;
    // find deceasing number
    for(let i = n - 1 ; i >= 0; i--) {
        if(nums[i] < nums[i + 1])
        {
            // find increasing number
            const nextLargerNumber = nextLarge(i);
            swap(i, nextLargerNumber);
            reverse(++i);
            return;
        }
    }

    nums.reverse();

    function reverse(start)
    {   
        let end = n - 1;
        while (start < end)
        {
            swap(start, end);
            start ++;
            end--;
        }
    }

    function swap(i, j)
    {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // find index of number increasing 
    function nextLarge(idx) {
        for(let i = nums.length-1; i > idx; i--) {
            if(nums[i] > nums[idx]) return i;
        }
    }

};
 

 
 
 nextPermutation()