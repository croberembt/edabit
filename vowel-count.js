/*

Instructions: Write a function that takes a string and returns the count of the number of vowels in the string, excluding y. 


Examples:

vowelCount('hello'); --> 2
vowelCount('dskjt'); --> 0
vowelCount('yellow'); --> 2
vowelCount('AEOIUY'); --> 5
vowelCount('aeioi'); --> 5


Code below: 

*/


function vowelCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' 
        || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
            count = ++count; 
        }
    }
    return count; 
}

vowelCount('hello');
vowelCount('dskjt');
vowelCount('yellow');
vowelCount('AEOIUY');
vowelCount('aeioi'); 
