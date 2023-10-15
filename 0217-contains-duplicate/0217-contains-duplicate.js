/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
     let numHash = {};

   for(let i = 0; i < nums.length; i++){

       if(!numHash[nums[i]]){
           numHash[nums[i]] = 0
       }

       numHash[nums[i]] = numHash[nums[i]] + 1



       if(numHash[nums[i]]>1){
           return true
       }
   }

   return false
};


