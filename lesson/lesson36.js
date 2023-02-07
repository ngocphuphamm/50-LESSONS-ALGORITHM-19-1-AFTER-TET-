/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums = [1,2,3,4,4,3,2,1], n = 4) {
    let result = [];
    const pivot = Math.ceil(nums.length/2);
    let nums2 = nums.splice(pivot ,nums.length -n);
    let currIndex = 0;

    while(currIndex < n)
    {
        result.push(nums[currIndex], nums2[currIndex]);
        currIndex++;
    }

    return result;
};

console.log(shuffle());