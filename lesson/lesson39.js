/**
 * @param {number[]} fruits
 * @return {number}
 */

// sliding window 2 elements
var totalFruit = function(fruits = [1,4,4,2,3,3,2,2]) {
    let windowStart = 0, maxWindow = 0;
    let n = fruits.length;

    const map = new Map();
    for(let windowEnd = 0; windowEnd < n; windowEnd++) {
        let typeFruit = fruits[windowEnd];
        if(!map.has(typeFruit)) {
            map.set(typeFruit, 0);
        }
        map.set(typeFruit, map.get(typeFruit) + 1);
        
        while(map.size > 2)
        {
            let typeFruitWindowStart = fruits[windowStart];
            map.set(typeFruitWindowStart, map.get(typeFruitWindowStart) - 1);
            if(map.get(typeFruitWindowStart) === 0)
            {
                map.delete(typeFruitWindowStart);
            }
            windowStart ++;
        }
        maxWindow = Math.max(maxWindow, windowEnd - windowStart + 1);
    }
    return maxWindow;
};

console.log(totalFruit());