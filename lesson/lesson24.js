//https://leetcode.com/problems/permutations-ii/description/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums = [1,1,2]) {
    let result = [];
    backtrack(result, nums, 0);
    return result;

    function backtrack(result, nums, start)
    {
        if(start === nums.length)
        {
            result.push(toList(nums));
        }
        else
        {
            for(let i = start; i < nums.length; i++)
            {
                if(i != start && !canPermutate(start, i, nums)) continue;
                swap(start, i, nums);
                backtrack(result, nums, start + 1);
                swap(start, i, nums);
            }
        }
    }


    function swap(i, j)
    {
        [nums[i], nums[j]] = [nums[j], nums[i]]; 
    }

    function toList(nums)
    {
        let l = [];
        for(let el of nums)
        {
            l.push(el);
        }
        return l;
    }
    
    function canPermutate(start, curr)
    {
        for(let i = start; i < curr; i++)
        {
            if(nums[i] === nums[curr])
            {
                return false;
            }
        }
        return true;
    }



}

console.log(permuteUnique());