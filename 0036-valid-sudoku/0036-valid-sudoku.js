/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    /*
    Input:Array- board
    Output: boolean (true/false)
    
    To-do: 1. In row, digits between 1-9, no repeting
    2. In column, digits between 1-9, no repeting
    3. In sub-boxes, digits between 1-9, no repeting
    4. Condition statement checks if its filled or not. 1-9 or .
    
    Note:
    
    Algo: 
    sets
    for(For)
        if('.') continue
        
        if(ri_num || ci) return false
        
    Naming condition:
    r1_num, c1_num, b1_5
    r1_num, c1_3, bi/3j/3_3

    
    return true
    
    */
    
    //Intialising set to store positiong of sudoku cells
    let set = new Set()
    
    //Iterating over sudoku cells
    for(let i = 0; i < board.length; i++){
        for(let j =0; j < 9; j++){
            if(board[i][j] === '.') continue                //Skipping empyt cells
            
            if(set.has(`r${i}_${board[i][j]}`) || set.has(`c${j}_${board[i][j]}`) || set.has(`b${parseInt(i/3)}_${parseInt(j/3)}_${board[i][j]}`)) return false           //Checking duplicates 
            set.add(`r${i}_${board[i][j]}`)                                          //Storing row position
            set.add(`c${j}_${board[i][j]}`)                                          //Storing column position
            set.add(`b${parseInt(i/3)}_${parseInt(j/3)}_${board[i][j]}`)            //Storing  sub-board position
        }
    }
    return true
};