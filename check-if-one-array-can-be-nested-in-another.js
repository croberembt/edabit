/*

Instructions: 

Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.

Examples:

canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false

Notes: 

Note the strict inequality (see example #3).

Code below: 

*/

let arr1 = [1, 2, 3, 4];
let arr2 = [0, 6];
let arr3 = [3, 1];
let arr4 = [4, 0];
let arr5 = [9, 9, 8];
let arr6 = [8, 9];
let arr7 = [1, 2, 3, 4];
let arr8 = [2, 3];

function canNest(arr1, arr2) {
    let min1 = arr1[0];
    let max1 = arr1[0];
    let min2 = arr2[0];
    let max2 = arr2[0];
	for (i = 1; i < arr1.length; i++) {
        if (min1 < arr1[i]) {
            min1 = min1;
        } else {
            min1 = arr1[i]; 
        }
        if (max1 > arr1[i]) {
            max1 = max1;
        } else {
            max1 = arr1[i]; 
        }
    }
    for (j = 1; j < arr2.length; j++) {
        if (min2 < arr2[j]) {
            min2 = min2;
        } else {
            min2 = arr2[j]; 
        }
        if (max2 > arr2[j]) {
            max2 = max2;
        } else {
            max2 = arr2[j]; 
        }
    }
    if (min1 > min2 && max1 < max2) {
        return true;
    } else {
        return false; 
    }
}

canNest(arr1, arr2);
canNest(arr3, arr4);
canNest(arr5, arr6);
canNest(arr7, arr8);