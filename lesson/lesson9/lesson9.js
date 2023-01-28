const combinationSum  = (candidates, target) =>{
    const result = [];
    backtrack(0, [], 0, candidates, target, result)
    return result;
}

const backtrack = (i, tempArray, total, candidates, target, result) =>{
    if(total ===  target){
        result.push([...tempArray]);
        return;
    }
    if(i >= candidates.length || total > target){
        return
    }
    // day stack
    tempArray.push(candidates[i]);
    backtrack(i, tempArray, total + candidates[i],candidates ,target, result);

    // nha stack 
    tempArray.pop();
    backtrack(i + 1, tempArray, total,candidates, target,result);
}


console.log(combinationSum([2,3,6,7],7));