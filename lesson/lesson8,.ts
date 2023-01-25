//https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/
function findFinalValue(nums: number[], original: number): number {
    const list = new Set(nums);
    let result = original;
    while (list.has(result)) result *= 2;
    return result;
};