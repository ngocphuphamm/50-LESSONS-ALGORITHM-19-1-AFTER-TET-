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
    
    tempArray.push(candidates[i]);
    backtrack(i, tempArray, total + candidates[i],candidates ,target, result);

    tempArray.pop();
    backtrack(i, tempArray, total,candidates, target,result);
}