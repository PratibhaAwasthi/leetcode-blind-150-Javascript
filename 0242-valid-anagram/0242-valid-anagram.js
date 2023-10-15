/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    /*
    * Brute-force 
    * Time-Complexity: O(nlogn) 
    * Space-Complexity: 

    if length of s !== length of t;
        return false 

      sort s;
      sort t;

      if s === t
        return true
      else
        return false 
    */

    /*
    * Hash-mapping/Using Object
    * Time-complexity:
    * Space-complexity:

    if length of s !== length of t;
        return false 

    let validAnagram = {}

    for: 
       
       if(!validAnagram[s[i]])
          validAnagram[s[i]]=1
       else 
          validAnagram[s[i]]++
       
    for: 
       
       if(!validAnagram[s[i]])
            return false
       else
            validAnagram[s[i]]-1

    */

    if(s.length!==t.length){

        return false
    }

    let validAnagram = {}
    
    for(let i = 0; i < s.length ;i++){

        if(!validAnagram[s[i]]){
            validAnagram[s[i]]=1
        }
        else{
          validAnagram[s[i]]++
        }
    }
    for(let i = 0; i < t.length ;i++){
       
       if(!validAnagram[t[i]])
            return false
       else{
           validAnagram[t[i]]=validAnagram[t[i]]-1
       }
     }

     return true


    

    
};