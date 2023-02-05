const longestIncreasing = (nums = [1, 2, 3, 1, 4, 8, 5]) =>{
    let dp = new Array(nums.length).fill(1);
    for(let i = 0; i < nums.length; i++)
    {
        for(let j = 0; j < i; j++)
        {
            if(nums[j] < nums[i])
            {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log(dp);
}
longestIncreasing();