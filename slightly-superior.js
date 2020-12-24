/*

Instructions: 

You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher 
than its counterpart (which means that evaluating the value > the other value will return true).

Create a function that returns whether the first array is slightly superior to that of the second.

isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

Examples:

isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false


Code below: 

*/

let test1 = ["a", "d", "c"]; 
let test2 = ["a", "b", "c"];
let test3 = ["zebra", "ostrich", "whale"]; 
let test4 = ["ant", "ostrich", "whale"]; 
let test5 = [1, 2, 3, 4]; 
let test6 = [1, 2, 4, 4]; 
let test7 = [true, 10, "zebra"]; 
let test8 = [true, 10, "zebra"]; 

function isFirstSuperior(arr1, arr2) {
	for (i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            return true; 
        } 
    }
    return false; 
}

isFirstSuperior(test1, test2);
isFirstSuperior(test3, test4);
isFirstSuperior(test5, test6);
isFirstSuperior(test7, test8);