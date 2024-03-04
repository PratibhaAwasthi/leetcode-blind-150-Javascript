/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(0, nums.length-1, nums, target)
};

let binarySearch = function (left, right, nums, target){
    
    if(left>right){
        return -1
    }
    
    let mid = Math.floor((right+left/2))

    if(target === nums[mid]) return mid
    
    if(target<nums[mid]){
        return binarySearch(0, mid-1, nums, target)
    }
    else if(target>nums[mid]){
        return binarySearch(mid+1, right, nums, target)
    }

}
