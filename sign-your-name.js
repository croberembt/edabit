/*

Instructions: 

Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.


Examples:

numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]

Notes:

All numbers will be integers.

You can expect negative numbers too.

Code below: 

*/

function numberSplit(n) {
    half = n / 2;
    array = []; 
    if (n % 2 === 0) {
        array = [half, half] 
    } else {
        array = [(half - .5), (half + .5)]; 
    }
    return array;
}


numberSplit(4);

numberSplit(10);

numberSplit(11);

numberSplit(-9); 

numberSplit(0); 