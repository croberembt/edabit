/*

Instructions: Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.


Examples:

largestSwap(27) ➞ false
largestSwap(43) ➞ true 


Code below: 

*/

function largestSwap(num) {
    string = num.toString();
    if (string.charAt(0) >= string.charAt(1)) {
        return true; 
    } else {
        return false;
    }
}


// true below
largestSwap(43);


// false below
largestSwap(27);


// true below
largestSwap(51);


// false below
largestSwap(56);


// true below
largestSwap(33);