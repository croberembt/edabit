// Write a function that returns the sum of all the values within an array.
// e.g. [1, 2, 5] returns 8, [-5, 2, 5, 12] returns 14; 

function sumofArray(array) {
    let sum = array.reduce(function(a, b) {
        return a + b;
    })
    return sum;
}


