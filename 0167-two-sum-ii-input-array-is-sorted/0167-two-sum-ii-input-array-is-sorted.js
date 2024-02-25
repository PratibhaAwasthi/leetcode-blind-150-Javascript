/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let solArr = [];
    let i = 0;
    let j = numbers.length-1;
    
    while(i<j){

    if(numbers[i] + numbers[j] === target){
    	solArr.push(i+1)
    	solArr.push(j+1)
    	return solArr
    }
    if(numbers[i] + numbers[j] > target) j--
    if(numbers[i] + numbers[j]<target) i++
    
    }
};
    
