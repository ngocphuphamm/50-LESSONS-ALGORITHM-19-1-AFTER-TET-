//https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/

const NUMBER_VALUE = 0;
function threeSum(nums: number[]): number[][] { 
    nums.sort((a : number, b : number) => a-b);
    
    const result : number[][] = [];
    const n = nums.length;
    
    for(let i = 0; i < n; i++)
        {
            if(i && nums[i] === nums[i - 1])
                {
                    continue;
                }
            let left : number   = i + 1;
            let right : number = n - 1;
            
            while(left < right)
                {
                    const sum : number = nums[i] + nums[left] + nums[right];
                    if(sum > 0)
                        {
                            right--;
                        }
                    else if (sum < 0)
                        {
                            left++;
                        }
                    else 
                        {
                            const arrResult : number[] = [nums[i], nums[left], nums[right]];
                            result.push(arrResult);
                            left++;
                            while(nums[left] == nums[left - 1] && left < right) left++;
                        }
                }
        }
    return result;
};