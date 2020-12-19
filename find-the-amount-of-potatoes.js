/*

Instructions: 

Create a function to return the amount of potatoes there are in a string.

Examples:

potatoes("potato") ➞ 1

potatoes("potatopotato") ➞ 2

potatoes("potatoapple") ➞ 1

Notes: 

N/A

Code below: 

*/

let test1 = 'potato';
let test2 = 'applewatermelonjuice'
let test3 = 'applepotatoyellowbluepotatojohnpotato';
let test4 = 'potatojohnpotatojulie'; 

function potatoes(str) {
    return str.split('potato').length - 1; // will always split string into an array 
}

potatoes(test1);
potatoes(test2);
potatoes(test3);
potatoes(test4);