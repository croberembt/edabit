/*

Instructions: 

Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

Examples:

add_ly = add_suffix("ly")

add_ly("hopeless") ➞ "hopelessly"
add_ly("total") ➞"totally"

add_less = add_suffix("less")

add_less("fear") ➞ "fearless"
add_less("ruth") ➞ "ruthless"


Code below: 

*/

function add_suffix(suffix) {
    answer = (inputString) => `${inputString}${suffix}`; 
    return answer;
}

add_ly = add_suffix('ly'); 
