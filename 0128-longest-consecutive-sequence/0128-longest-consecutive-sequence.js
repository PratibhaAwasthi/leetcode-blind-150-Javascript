/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    /*
    input: unsorted array->nums
    [100,4,200,1,3,2]
    
    output: length 
    
    action: 
    Brute-force -> sort of array
    [1,2,3,4,100,200]
    
    
    */
    if(nums.length === 0) return 0               
    
    nums.sort((a,b) => a-b)                  //O(NlogN)
    let result  = 0                         
    let temp = 0
    
    for(let i = 0; i<nums.length;i++){ 
        if(nums[i] === nums[i+1]) continue
        temp++           
        if(nums[i]+1 !== nums[i+1]){
            result = Math.max(result, temp)
            temp = 0;
        } 
        
    }
    
    return result                                            
};