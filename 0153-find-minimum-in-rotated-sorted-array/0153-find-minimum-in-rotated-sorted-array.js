/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
     let left = 0, right = nums.length-1, middle
     
    if(nums.length ===1) return nums[0];
    if(nums[right]>nums[0]) return nums[0];
    
    while(left<right){
        middle = Math.floor((left+right)/2);
        
        if(nums[middle]>nums[middle+1]) return nums[middle+1];
        if(nums[middle-1]>nums[middle]) return nums[middle];
        if(nums[middle] > nums[left]) left = middle +1 
        else right = middle-1
        
    }
    
    return left
};


