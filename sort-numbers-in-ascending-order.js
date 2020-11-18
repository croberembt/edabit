/*

Instructions: 

Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

Sort numbers array in ascending order.
If the function's argument is null, an empty array, or undefined; return an empty array.
Return a new array of sorted numbers.

Examples:

sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]

sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]

sortNumsAscending(null) ➞ []

sortNumsAscending([]) ➞ []

Code below: 

*/

let arr1 = [1, 2, 10, 50, 5];
let arr2 = [80, 29, 4, -95, -24, 85];
let arr3 = null;
let arr4 = []; 


function sortNumsAscending(arr) {
    if (arr !== null && arr !== []) {
        newArr = arr.sort(function(a, b){return a-b}); 
        return newArr; 
    } else {
        return []; 
    }
}

sortNumsAscending(arr1); 
sortNumsAscending(arr2); 
sortNumsAscending(arr3); 
sortNumsAscending(arr4); 