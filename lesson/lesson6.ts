//https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/4153/
function countAndSay(n: number): string {
    if(n == 1) return n + "";
    let result  = "1";
    for(let i = 1; i < n; i++)
        {
           result = nextSeq(result);
        }
      return result;
  };

function nextSeq(seq : string) : string{
    let nextSeq :  string = "";
    for(let i = 0; i < seq.length;i++)
    {
        let count : number =  1;
        while(seq[i] === seq[i + 1] && i < seq.length - 1)
        {
            count++;
            i++;
        }
        nextSeq += `${count}${seq[i]}`;
    }
    return nextSeq;
}