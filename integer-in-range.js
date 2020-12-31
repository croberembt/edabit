/*

Instructions: 

Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.

Examples:

intWithinBounds(3, 1, 9) ➞ true

intWithinBounds(6, 1, 6) ➞ false

intWithinBounds(4.5, 3, 8) ➞ false

Notes:

The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
Bounds will be always given as integers.

Code below: 

*/


function intWithinBounds(n, lower, upper) {
	if (Number.isInteger(n) === false) {
        return false; 
    } else if (n >= lower && n < upper) {
        return true; 
    } else {
        return false; 
    }
}

intWithinBounds(3, 1, 9);

intWithinBounds(6, 1, 6); 

intWithinBounds(4.5, 3, 8); 