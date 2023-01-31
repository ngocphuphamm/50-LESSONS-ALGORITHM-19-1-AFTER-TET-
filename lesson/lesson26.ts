//https://leetcode.com/problems/number-of-islands/description/
function numIslands(grid: string[][]): number {
    const row : number = grid.length; 
    const column : number = grid[0].length;
    let count : number = 0;
    let set : boolean[][] = new Array(row).fill(0).map(() => new Array(column).fill(false));
    
    for(let i = 0; i  < row; i++)
    {
        for(let j = 0; j < column; j++)
        {
            if(grid[i][j] === "1" && set[i][j] === false)
            {
                dfs(i, j);
                count++;
            }
            
        }
    }
    return count;


    function dfs(i, j)
    {
        // caculator base
        if(!validDFS(i, j)) return ;
        if(set[i][j] === true ||grid[i][j] === "0") return;

        set[i][j] = true;
    
        
        dfs(i, j + 1);
        dfs(i, j - 1);
        dfs(i + 1, j);
        dfs(i - 1, j);
    } 

    function validDFS(i, j) : boolean
    {
        return i >= 0 && j >= 0 && j < column && i < row;
    }
};