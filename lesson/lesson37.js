const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
'6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"};
var letterCombinations = function(D = "23") {
    const len = D.length;
    let ans = [];
    if(len == 0) return ans;

    function dfs(pos, str)
    {
        if(pos == len) return ans.push(str);
        else{
            let letters = L[D[pos]];

            for(let i = 0; i < letters.length; i++)
            {
                dfs(pos + 1, str + letters[i]);
            }
        }

    }

    dfs(0, "");
    return ans
};

console.log(letterCombinations());