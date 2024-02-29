/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    
    let operators = {
        '+':(num1,num2) => num1+num2,
        '-':(num1,num2) => num1-num2,
        '*':(num1,num2) => num1*num2,
        '/':(num1, num2) => Math.trunc(num1/num2)
    }
    
    for(let token of tokens){
        if(operators[token]){
            let num2=stack.pop();
            let num1=stack.pop();
            
            stack.push(operators[token]( parseInt(num1), parseInt(num2)));
        }
        else {
            stack.push(parseInt(token))
        }
    }
    return stack[0]
};

 
