/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    /*
    Input: array piles
    Output: no of hours
    Action plan:
    
    Ex: [3,6,7,11] 
    
    min banana = 1
    max banana = max no of bananas in the arrray piles
    
    1. find the maximum bananas: 
    Two ways ->  (a) sort the array and get nums[-1] but unnecessary increase in time complexity
    (b) loop the array and find the maximum
    
    for:
    
    2. noOfhours(): 
    input: speed 
    output: hours
    action: totalHours += Math.ceil(pile/speed)
    
    3. BSF():
    input:
    mid = Math.floor((left+right)/2)
    action: while(left<right):
    if(totalHours<=h): right = mid 
    else if(totalHours>h): left = mid
    
    4. return left
    
    5. bsf(1,maxPile)
    */
    
    let maxPile = 0;
    
    for(let pile of piles){
        maxPile = Math.max(pile, maxPile)
    }
    
    let totalHours = function (speed){
        let totalHours = 0;
        for(let pile of piles){
            totalHours += Math.ceil(pile/speed)
        }
        return totalHours
    }
    
    let binarySearch = function (left, right){
        while(left<right){
        let mid = Math.floor((left+right)/2)
        let hour = totalHours(mid)
        
        if(hour<=h) right = mid
        else if(hour>h) left = mid+1
    
    } 
        return left
    }
    
    return binarySearch(1,maxPile)
};