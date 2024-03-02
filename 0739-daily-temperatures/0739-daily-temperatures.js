/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let solArr = new Array(temperatures.length).fill(0);

    
    for(let i=0; i<temperatures.length; i++){
        while(stack.length && temperatures[stack[stack.length-1]] < temperatures[i] ){
            let index =stack.pop()
            solArr[index] = i-index
        }
        stack.push(i)
    }
    return solArr
    
    };