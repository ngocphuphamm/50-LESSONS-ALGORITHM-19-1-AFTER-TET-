/*
    Input: arr = [10,2,5,3]
    Output: true
    Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
*/
function checkIfExist(arr: number[] = [-2,0,10,-19,4,6,-8]): boolean {
    arr.sort((a:number, b: number) => a-b);
    for(let i = 0; i < arr.length; i++)
    {
        const multi = arr[i] * 2;
        const flag = arr.indexOf(multi);
        if(flag !== -1 && i !== flag)
        {
            return true;
        }
    }
    return false;
};

checkIfExist();