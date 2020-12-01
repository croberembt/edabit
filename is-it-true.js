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
    let num1 = 0;
    let num2 = 0;
    let newArray = []; 
    let a = 0;
    let b = 0; 
	if (relation.includes('=')) { 
        separate = relation.split('='); 
        num1 = parseInt(separate[0]);
        num2 = parseInt(separate[1]); 
        newArray = [num1, num2]; 
    } else if (relation.includes('<')) {
        separate = relation.split('<'); 
        num1 = parseInt(separate[0]);
        num2 = parseInt(separate[1]); 
        newArray = [num1, num2]; 
    } else if (relation.includes('>')) {
        separate = relation.split('>'); 
        num1 = parseInt(separate[0]);
        num2 = parseInt(separate[1]); 
        newArray = [num1, num2]; 
    } else {
        return 'This is not a valid comparison. Please try again.'; 
    }
    if (relation.includes('=')) { 
        a = newArray[0];
        b = newArray[1]; 
        if ((a = b) === true) {
            return true;
        } else {
            return false; 
        }
    } else if (relation.includes('<')) {
        a = newArray[0];
        b = newArray[1]; 
        if ((a < b) === true) {
            return true;
        } else {
            return false; 
        }
    } else if (relation.includes('>')) {
        a = newArray[0];
        b = newArray[1]; 
        if ((a > b) === true) {
            return true;
        } else {
            return false; 
        }
    } else {
        return 'This is not a valid comparison. Please try again.'; 
    }
}

isTrue(test1);
isTrue(test2);
isTrue(test3);
isTrue(test4);

// While getting closer, I have not solved this. I could not find the original question in Edabit (may have been removed), so I 
// have posted to stack overflow for help. I hope to learn a lot from this problem. The initial question suggested using eval(), 
// but it is a high security risk, so I want to learn how to solve this without eval(). 
