/*

Instructions: 

In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

Examples:

isTrue("2=2") ➞ true

isTrue("8<7") ➞ false

isTrue("5=13") ➞ false

isTrue("15>4") ➞ true

Notes: 

Tests will only have three types of relations: =, >, and <

Code below: 

*/

let test1 = '2=2'; 
let test2 = '8<7'; 
let test3 = '5=13';
let test4 = '15>4'; 

function isTrue(relation) {
    let separate = []; 
    let operator = ''; 
	if (relation.includes('=')) { 
        separate = relation.split('='); 
        operator = '='; 
    } else if (relation.includes('<')) {
        separate = relation.split('<'); 
        operator = '<';
    } else if (relation.includes('>')) {
        separate = relation.split('>'); 
        operator = '>'; 
    } else {
        return 'This is not a valid comparison. Please try again.'; 
    }
    let num1 = parseInt(separate[0]);
    let num2 = parseInt(separate[1]); 
    return [num1, num2]; 
}

isTrue(test1);
isTrue(test2);
isTrue(test3);
isTrue(test4);

// my notes: I realized my code above was working towards a solution to be able to compare the numbers, but not to evaluate
// whether the original comparison string was true or false. I will have to come back at this with the correct angle. 
// this may be a very long function, but I think following the logical long route will help me understand different javascript methods
