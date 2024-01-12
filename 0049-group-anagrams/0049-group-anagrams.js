/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let ans = new Map ();
    
    for(let s of strs){
        
        let count = Array(26).fill(0);
        
        for(let c of s){
           count[c.charCodeAt(0) - 'a'.charCodeAt(0)] +=1;
        }
        
        let key = count.join('#');
        
        if(!ans.has(key)) {
            ans.set(key, [s])
        }
        else{
            ans.get(key).push(s)
        }
                             
    }
    return Array.from(ans.values());
};