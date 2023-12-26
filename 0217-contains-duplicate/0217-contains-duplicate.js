/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /*
    brute-force
    [1,2,3,1]
    */
    
    let hashMap = {}
    
    for(let i = 0; i<nums.length; i++){
        
        if(hashMap[nums[i]] === undefined){
            hashMap[nums[i]] = 1
        }
        else{
            return true
        }
    }
    
    return false
};