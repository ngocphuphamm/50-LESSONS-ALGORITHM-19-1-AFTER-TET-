var findTargetSumWays = function(nums = [1,1,1,1,1], target = 3) {
    function dfs(i = 0, total = 0)
   {
        if(i === nums.length)
        {
            return total === target;
        }

        add = dfs(i + 1, total + nums[i]);
        sub = dfs(i + 1, total - nums[i]);

        return add + sub;
   }
   return dfs();
}; 


console.log(findTargetSumWays());

