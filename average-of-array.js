// given an array with multiple values, write a function that returns the average of the values in the array

function averageOfArray(array) {
    let sum = array[0];
    for (i = 1; i < array.length; i++) {
        sum = sum + array[i]; 
    }
    let average = sum / array.length; 
    return average; 
}