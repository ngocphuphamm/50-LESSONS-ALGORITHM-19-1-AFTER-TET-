//https://leetcode.com/problems/permutation-in-string/description/
function checkInclusion(s1 = "ab", s2 = "eidboaoo") {
    const mapS1 = new Map();
    for(let i = 0; i < s1.length; i++) {
        if(!mapS1.has(s1[i])) {
            mapS1.set(s1[i], 1);
            continue;
        }
        mapS1.set(s1[i], mapS1.get(s1[i]) + 1);
    }

    const n = s1.length;
    const m = s2.length;
    for(let i = 0; i <= m - n; i++) {
        const tempMap = new Map(mapS1);
        // start sliding window
        let counter = 0;
        for(let j = i; j < i + n; j++) {
           if(tempMap.has(s2[j]) && tempMap.get(s2[j]) > 0) {
            counter ++; 
            mapS1.set(s1[i], mapS1.get(s1[i]) - 1);
           }
           else
           {
             counter =0;
              break; 
           };
        }
        
       if(counter == n )
       {
        return true;
       }
    }
    return false;
};



console.log(checkInclusion());