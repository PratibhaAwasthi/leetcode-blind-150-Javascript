/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(strs){
	if(strs.length === 0) return false
	let str2 = strs.toLowerCase();
	let regex = /[^a-zA-Z0-9]/g
	let cleanStr = str2.replace(regex, '');
	console.log(cleanStr)
	let i =0, j=cleanStr.length-1;
	while(i<j){
		if(cleanStr[i] === cleanStr[j]){
			i++;
			j--;
		}
		else {
		    return false
		}
    }

return true;
};