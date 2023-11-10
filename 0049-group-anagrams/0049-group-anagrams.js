/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let hashMap = {}

    for(let i =0; i<strs.length; i++){

        let sortedStr = strs[i].split('').sort().join('');

        if(hashMap[sortedStr] === undefined){
            hashMap[sortedStr] = [strs[i]]
        }

        else{
            hashMap[sortedStr].push(strs[i])
        }
    }

    let result = Object.values(hashMap)

    return result
    
};