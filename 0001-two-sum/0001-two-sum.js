/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let hashMap = {}
    
    for(let i = 0; i < nums.length; i++){
        let integer2 = target - nums[i]
        if(hashMap[nums[i]] === undefined){
           hashMap[integer2] = i 
        }
        else {
            return [ hashMap[nums[i]],i]
        }
    
    }
    
};