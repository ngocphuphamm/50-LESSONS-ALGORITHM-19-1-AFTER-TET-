// https://leetcode.com/problems/house-robber/


// function rob(nums = [1,2,3,1])
// {
//     return dfs(nums.length - 1);

//     function dfs(n)
//     {
//         if(n < 0) return 0;   
//         return Math.max(dfs(n - 1), dfs(n - 2) + nums[n]);
//     }

// }



// 2 options
// 1 : da cuop nha truoc do 
// 2 : chua cuop nha truoc do nen phai lay nha hien tai 
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums = [1,2,3,1]) {
    let prev1 = 0, prev2 = 0;
    for (let el of nums)
    {
        newEl = Math.max(prev1, prev2 + el);
        prev2 = prev1;
        prev1 = newEl;
    }

    return prev1;
};

console.log(rob());
