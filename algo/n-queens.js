/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    
};

const isSafe =(board, row,  col) => { 
        let i, j; 
  
        /* Check this row on left side */
        for (i = 0; i < col; i++) 
            if (board[row][i] == 1) 
                return false; 
  
        /* Check upper diagonal on left side */
        for (i = row, j = col; i >= 0 && j >= 0; i--, j--) 
            if (board[i][j] == 1) 
                return false; 
  
        /* Check lower diagonal on left side */
        for (i = row, j = col; j >= 0 && i < N; i++, j--) 
            if (board[i][j] == 1) 
                return false; 
  
        return true; 
    } 

/*
start from 0 [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
a[i][j]
2,2 => 02,12,00,11,1,3

arr, x,y, n
check if arr[x,y]  else arr, 

0q00
000q
q000
00q0

00q0
q000
000q
0q00




*/