/*
    Input: arr = [10,2,5,3]
    Output: true
    Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
*/
function checkIfExist(arr) {
    if (arr === void 0) { arr = [10, 2, 5, 3]; }
    arr.sort(function (a, b) { return a - b; });
    var result = new Set();
    for (var i = 0; i < arr.length; i++) {
        var multi = arr[i] * 2;
        var flag = arr.indexOf(multi);
        console.log(flag);
    }
}
;
checkIfExist();
