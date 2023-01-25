//https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/
function increasingTriplet(nums: number[]): boolean { 
    let stack1 : number =  Number.MAX_SAFE_INTEGER; 
    let stack2 : number =  Number.MAX_SAFE_INTEGER; 
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= stack1)
        {
            stack1 = nums[i];
        }
        else if(nums[i] <= stack2)
        {
            stack2 = nums[i];
        }
        else
        {
            return true;
        }
    }
    return false; 
}