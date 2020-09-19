// given an array with multiple values, write a function that returns the maximum number in the array

function highestNumber(array) {
    let high = Math.max(...array);
    return high;
}

// or

function highestNumber(array) {
    let max = array[0]; 
    for (i = 1; i < array.length; i++) {
        if (max > array[i]) {
            max = max; 
        } else {
            max = array[i]; 
        }
    }
    return max; 
}