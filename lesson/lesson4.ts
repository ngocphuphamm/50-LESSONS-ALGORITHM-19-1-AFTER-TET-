https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/780/
function longestPalindrome(s: string): string {
    let result : string = "";
    
    for(let i = 0; i < s.length; i++)
        {
            const oddPalindrome = getPalindromeSubstring(s, i, i);
            const evenPalinrome = getPalindromeSubstring(s, i, i + 1);
            result = getLongPalindrome([result, oddPalindrome, evenPalinrome]);
        }
    return result;
};

function getLongPalindrome(strPalindrome : string[]): string{
    return strPalindrome.reduce((el1, el2) => {
        return el1.length > el2.length ? el1 : el2;
    })
}

function getPalindromeSubstring(s : string, left : number, right : number) : string{
    function isPalindrome(s : string , left : number, right : number){
        const isValidLeft = left >= 0;
        const isValidRight = right < s.length; 
        const areCharacterLeftSameRight = s[left] == s[right];
        return isValidLeft && isValidRight && areCharacterLeftSameRight;
    }
    while(isPalindrome(s, left, right))
    {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}
    

    

