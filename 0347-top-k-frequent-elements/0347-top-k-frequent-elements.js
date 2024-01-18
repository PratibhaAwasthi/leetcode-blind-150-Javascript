/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    //Brute-force
    
    /*  
    Map { key: element, value: count}
    Looping nums:
        array->Map

     return[...Map.keys.sort(map[b]-map[a]).slice(0,k)]
    */
    
    let map = {}
    
    for ( let element of nums) {
        
        if(!map[element]){
            map[element] = 0
        }
        
        map[element]++
    }
    
    return [...Object.keys(map).sort((a,b) => map[b]-map[a]).slice(0,k)]
    
};