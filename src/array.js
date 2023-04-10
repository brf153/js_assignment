/**
 * Returns an index of the specified element in array or -1 if element is not found
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
	for(let i=0; i<=arr.length; i++){
		if(value===arr[i]){
			var sum=i;
			break;
		}
		else{var sum=0;}
	}
	if(sum!==0){
		return sum;
	}else{return -1}

}

/**
 * Returns the doubled array - elements of the specified array are repeated twice
 * using original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []
 */

function doubleArray(arr) {
	var ans = new Array();
for(let i=0;i<2*arr.length;i++){
	
	if(i<arr.length){
		ans[i]= arr[i];
	}
	else{
		ans[i]= arr[i];
	}
}
return ans;
}

/**
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []
 */
function getArrayOfPositives(arr) {
	// throw new Error("Not implemented");
	var side = new Array();
	for(let i=0;i<=arr.length;i++){
		if(arr[i]>0)
		side[i]=arr[i];
		else
		continue;
		
	}
if(side[0]!==null){
for(let i=1;i<=side[i];i++){
	for(let j=0; j<i;j++){
		if(side[j]>side[i]){
		var changer;
		changer = side[i];
		side[i] = side[j];
		side[j] = changer;}
		else
		continue;
	}}
	
}
else{
	return [];
}

return side;
}

/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
	// throw new Error("Not implemented");
	var req = new Array();
	for(let i=0; i<=arr.length;i++){
		for(let j=0; ; j++){
		if(arr[i]!== false || NaN || 0 || undefined || ''){
			req[j]= arr[i];
		}
		else
		continue;
	}
	}
	return req;
}

/**
 * Returns the array of string lengths from the specified string array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
	// throw new Error("Not implemented");
	var ans = new Array();
	for(let i=0; i<=arr.length; i++){
		ans[i]= `${arr[i]}`.length;
	}
	return ans;
}

/**
 * Returns the sum of all items in the specified array of numbers
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
	// throw new Error("Not implemented");
	if(arr[0]==null){
		return 0;
	}
	else{
		var sum;
		for(let i=0;i<=arr.length;i++){
			sum= sum+ arr[i];
		}
	}
	return sum;
}

module.exports = {
	findElement,
	doubleArray,
	getArrayOfPositives,
	removeFalsyValues,
	getStringsLength,
	getItemsSum,
};
