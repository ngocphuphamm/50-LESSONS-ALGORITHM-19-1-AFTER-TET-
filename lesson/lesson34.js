//https://leetcode.com/problems/container-with-most-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height = [1,8,6,2,5,4,8,3,7]) {
    // maxWater = height * length;
    // height = Min(height(left), height(right));
    // length = right - left;
    let right = height.length - 1, left = 0, maxWater = 0;

    while(left < right)
    {
        maxWater = compareMaxWater(height, left, right, maxWater);
        if(height[left]  > height[right]) right--;
        else  left++;
    }
    return maxWater;
};

function compareMaxWater(listHeight, left, right, maxWater)
{
    const height = Math.min(listHeight[left], listHeight[right]);
    const length = right - left;
    const maxWaterCurrent = height * length;
    return Math.max(maxWater, maxWaterCurrent);
}

console.log(maxArea());