// https://www.hackerrank.com/challenges/picking-numbers/problem
function pickingNumbers(nums = [4,6,5,3, 3, 1]) {
    // Write your code here
   nums.sort((a, b) => a - b );
   let result = 0;
   for(let i = 0; i < nums.length; i++) {
        let flag = false;
        for(let j = i + 1; j < nums.length; j++) {
            if(Math.abs(nums[j] - nums[i]) > 1)
            {
                let count = j - i;
                result = Math.max(result, count);
                flag = true;
                break;
            }
        }
        if(flag === false)
        {
            let count = nums.length - i;
            result = Math.max(result, count);
        }
    }
    return result;
}
console.log(pickingNumbers());