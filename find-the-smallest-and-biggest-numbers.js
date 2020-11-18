/*

Instructions: 

Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples:

minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]

Code below: 

*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2334454, 5];
let arr3 = [1];
let arr4 = [-12, 16, -37, 8, 280, 12];


function minMax(arr) {
    let max = arr[0];
    let min = arr[0]; 
	for (i = 1; i < arr.length; i++) {
        if (max > arr[i]) {
            max = max; 
        }
        else {
            max = arr[i]; 
        }
    }
    for (i = 1; i < arr.length; i++) {
        if (min < arr[i]) {
            min = min; 
        }
        else {
            min = arr[i]; 
        }
    }
    return [min, max];
}

minMax(arr1);
minMax(arr2);
minMax(arr3);
minMax(arr4); 