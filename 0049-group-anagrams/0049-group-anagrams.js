/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
//Brute-force
//Time Complexity
    
    let cache = {};
    
    for(let s of strs){
        
        let sorted = s.split('').sort().join('')
        
        if(!cache[sorted]){
            cache[sorted] = [s]
        }
        else{
            cache[sorted].push(s)
        }
    }
    
    return Object.values(cache)
};