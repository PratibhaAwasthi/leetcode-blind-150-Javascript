/*

timeKeyMap = { 
key1: [[time1,value1], [time2,value2], ... [timeN],[valueN]],
key2: [[time1,value1], [time2,value2], ... [timeN],[valueN]],
.
.
.
keyM: [[time1,value1], [time2,value2], ... [timeN],[valueN]]
}

*/



class TimeMap {
    constructor () 
    { 
    let timeKeyMap
    this.timeKeyMap = {}
    }
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!(key in this.timeKeyMap)){
        this.timeKeyMap[key] = []
    }
    
    this.timeKeyMap[key].push([timestamp, value])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    
    if(!(key in this.timeKeyMap)) return ""
    if(this.timeKeyMap[key][0][0] > timestamp) return ""
    
    let left = 0, right = this.timeKeyMap[key].length
    while(left<right) {
        let mid = Math.floor((left+right)/2)
        
        if (this.timeKeyMap[key][mid][0] <= timestamp ){
            left = mid+1
        } else{
            right = mid
        }
    }
    
    if(right === 0) return "";
    
    return this.timeKeyMap[key][right-1][1]
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */