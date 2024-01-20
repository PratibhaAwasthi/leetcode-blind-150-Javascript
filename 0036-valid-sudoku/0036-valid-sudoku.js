/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    /* Input: Nested Array with element as string (board)
       Output: Boolean (true/false)
       
       To-do: 
       1. Number in cells of rows are not repetative
       2. Numbers in cells of Column not repetative
       3. Numbers in 3x3 cell not repetative.
       
       r15 c15  15 
       r55 c15  45
       
       set
    
    */
    
    let set = new Set()
    
    for(let i = 0; i < board.length; i++){
        for(let j =0; j < 9; j++){
            if(board[i][j] === '.') continue
            let num = board[i][j]
            if(set.has(`r${[j]}_${num}`) || set.has(`c${[i]}_${num}`) || set.has(`b${parseInt(j/3)}_${parseInt(i/3)}${num}`)){
                return false
            }
            else {
             set.add(`r${j}_${num}`);
             set.add(`c${i}_${num}`);
             set.add(`b${parseInt(j/3)}_${parseInt(i/3)}${num}`)
            }
            
        }
    }
    return true
};