/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
let area  = 0
let maxArea = 0
let i = 0;
let j = height.length-1
while(i<j){
    if(height[i] <= height[j]){
        let length = j-i
        let width = height[i]
        area = length * width
        i++
    }
    else if(height[i]> height[j]){
        let length = j-i
        let width = height[j]
        area = length * width
        j-- 
    }
    maxArea = Math.max(maxArea, area)
}
    return maxArea;

};