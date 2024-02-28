/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    if(s[0]===')' || s[0] === ']' || s[0] === '}') return false
    if(s[s.length-1]==='(' || s[s.length-1] === '[' || s[s.length-1] === '{') return false
   
    
    for (let i=0; i< s.length; i++){
        let top = stack[stack.length-1];
        if(s[i]==='(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i])
        } 
        else if(s[i]===')' || s[i] === ']' || s[i] === '}'){
            if(s[i] === ')' && top === '(') stack.pop();
            else if(s[i] === ']' && top === '[') stack.pop();
            else if(s[i] === '}' && top === '{') stack.pop();
            else return false
           
        }
        else return false
    }
    console.log(stack)
    return (stack.length === 0 ? true : false)
};