
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length===0){
        this.stack.push(val);
        this.minStack.push(val)
    } 
    else{
        this.stack.push(val);
        this.minStack.push(Math.min(val,this.minStack[this.minStack.length-1]))
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length === 0) return null
    else{
        this.minStack.pop()
        return this.stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return(this.stack[this.stack.length-1])
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return (this.minStack[this.minStack.length-1])
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */