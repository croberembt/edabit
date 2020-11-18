/*

Instructions: 

Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

Examples:

charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4

Code below: 

*/

let str1 = 'Courage and stupidity were all he had.';
let str2 = 'Truth in advertising and dinosaurs with skateboards have much in common';
let str3 = 'He hated that he loved what she hated about hate.';
let str4 = "It didn't make sense unless you had the power to eat colors.";
let str5 = 'The pet shop stocks everything you need to keep your anaconda happy.';
let str6 = 'If my calculator had a history, it would be more embarrassing than my browser history.';

let char1 = 'i';
let char2 = 'u';
let char3 = 's';
let char4 = 'a';
let char5 = 'l';
let char6 = 'h'; 

function charCount(myChar, str) {
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === myChar) {
            count++;
        }
    }
    return count; 
}

charCount(char1, str1);
charCount(char2, str2);
charCount(char3, str3);
charCount(char4, str4);
charCount(char5, str5);
charCount(char6, str6);