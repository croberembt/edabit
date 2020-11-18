/*

Instructions: 

Create a function that takes the age and return the age in days.

Examples:

calcAge(65) ➞ 23725

calcAge(0) ➞ 0

calcAge(20) ➞ 7300

Notes:

Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now.
Expect only positive integer inputs.

Code below: 

*/

let age1 = 24;
let age2 = 33;
let age3 = 66;

function calcAge(age) {
    let days = age * 365; 
	return days;
}


calcAge(age1);
calcAge(age2);
calcAge(age3);