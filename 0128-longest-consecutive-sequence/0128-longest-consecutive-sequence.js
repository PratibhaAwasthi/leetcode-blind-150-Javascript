/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //Optimised 
   //[100,4,200,1,3,2]
    
    if(nums.length === 0) return 0
    
    let set = new Set(nums)
    let result = 0;
    
    for(elements of set){
        if(set.has(elements - 1)) continue
        let currLength = 1;
        
        while(set.has(elements+1)){
            currLength++
            elements++
        }
        
        result = Math.max(currLength, result)
    }
    
    return result;
    

};