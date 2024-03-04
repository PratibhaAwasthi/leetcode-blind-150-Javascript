/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    /*
    function1 find the row
    function2 find the column
    */
    
    let rowLength = matrix.length;
    let columnLength = matrix[0].length;
    
    
    let findRow = function(){
        let left = 0, right = rowLength-1, mid;
        
        while(left<right){
            mid = Math.floor((left+right)/2);
            
            if(target < matrix[mid][0]) right = mid-1
            else if(target>= matrix[mid][0] && target<matrix[mid+1][0]) return mid
            else left = mid+1
        }
        return left
    }
    
    let findTarget = function(row){
        let left = 0, right = columnLength-1, mid;
        
        while(left<=right){
            mid= Math.floor((left+right)/2);
            
            if(target === matrix[row][mid]) return true
            else if(target<matrix[row][mid]) right = mid-1
            else left = mid+1
        }
        return false
    }
    
    let row = findRow()
    return findTarget(row)
};