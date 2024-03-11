/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    /*
    input: nums | array
    output: indexof target/ -1
    
    to-do:
    [4,5,6,7,0,1,2]
    
    left= 0
    right = nums.length-1
    middle
    
    while: left<right
    mid= left+right/2
    
    nums[mid] === target return mid
    
    if(nums[left]<nums[mid]):
     if(nums[left]<= target && nums[mid]>= target): right = mid-1
     else left = mid+1
    
    else 
        if(nums[mid+1] <= target && nums[right]>= target): left = mid+1
        else right= mid-1
    */
    
    let left = 0, right = nums.length-1, middle
    
    while(left<=right){
        middle = Math.floor((left+right)/2);
        
        if (nums[middle] === target) return middle
        
        if(nums[left]<nums[middle]){
            (nums[left]<= target && nums[middle]>= target) ? right = middle-1 : left = middle+1
        }
        else {
            (nums[middle+1] <= target && nums[right] >= target) ? left = middle+1 : right = middle-1
        }
    }
    return -1
};