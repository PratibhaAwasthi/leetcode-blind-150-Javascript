/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*
    * Brute-force
    * Space Complexity
    * Time Complexity

    for: 
        for:
            if(nums[i]+nums[j]=target)
                return i,j

    */

    /*
    * Hash map
    * Space Complexity
    * Time Complexity
    */

    let getSum = {}

    for(let i = 0; i<nums.length; i++){
        let complement = target-nums[i]
        if(getSum[complement] !== undefined){           //check before inputing to avoid duplication
            return [i, getSum[complement]]
        }
        getSum[nums[i]] =  i;
    }
}; 