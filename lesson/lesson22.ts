//https://leetcode.com/problems/jump-game/submissions/886961466/
function canJump(nums: number[]): boolean {
    const n  : number = nums.length;
    if(n == 1) return true;
    let goal : number = 0;
    let currIdx : number = 0;

    while(currIdx < n - 1 && goal >= currIdx)
    {
        const variableJumpCurrIdx = currIdx + nums[currIdx];
        if(goal < variableJumpCurrIdx)
        {
            goal = variableJumpCurrIdx;
        }

        if(goal >= n  - 1 )
        {
            return true;
        }
        currIdx ++;
    }
    return false;
};