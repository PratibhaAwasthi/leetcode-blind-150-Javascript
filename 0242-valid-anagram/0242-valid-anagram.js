/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length){
        return false
    }
    
    let hashMap = {}
    
    for(let i = 0; i<s.length; i++){
        
       if(hashMap[s[i]] === undefined){
          
           hashMap[s[i]] = 1
       }
        else{
            hashMap[s[i]]++
        }
    }
    
    for(let i = 0; i<t.length; i++){
        
        if(hashMap[t[i]] === undefined || hashMap[t[i]] === 0){
            return false
        }
        else{
            hashMap[t[i]] = hashMap[t[i]]-1
        }
    }
    
    return true
    
};