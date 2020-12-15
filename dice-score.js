/*

Instructions: 

Greed is a dice game played with five six-sided dices. Your mission is to score a throw according to these rules:

    Three 1's => 1000 points
    Three 6's =>  600 points
    Three 5's =>  500 points
    Three 4's =>  400 points
    Three 3's =>  300 points
    Three 2's =>  200 points
    One   1   =>  100 points
    One   5   =>   50 point

Examples:

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)


diceScore([2, 3, 4, 6, 2]) ➞ 0

diceScore([4, 4, 4, 3, 3]) ➞ 400

diceScore([2, 4, 4, 5, 4]) ➞ 450

Notes: 

A single dice can only be counted once in each roll. For example, a given "5" can only be counted as a 
part of the triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Code below: 

*/

let dice1 = [2, 3, 4, 6, 2];
let dice2 = [4, 4, 4, 3, 3];
let dice3 = [2, 4, 4, 5, 4]; 
let dice4 = [5, 5, 5, 5, 1];
let dice5 = [3, 3, 3, 5, 5]; 
let dice6 = [5, 5, 5, 1, 3]; 
let dice7 = [3, 2, 3, 2, 3];
let dice8 = [3, 3, 3, 3, 3]; 


function diceScore(throws) {
    let countOne = 0;
    let countTwo = 0;
    let countThree = 0;
    let countFour = 0;
    let countFive = 0;
    let countSix = 0; 
    let i = 0;
    let total1 = 0; 
    let total2 = 0;
    let total3 = 0;
    let total4 = 0; 
    let total5 = 0;
    let total6 = 0;
    let finalScore = 0; 
	for (i = 0; i < throws.length; i++) {
        if (throws[i] === 1) {
            countOne = countOne + 1; 
        } else if (throws[i] === 2) {
            countTwo = countTwo + 1;
        } else if (throws[i] === 3) {
            countThree = countThree + 1;
        } else if (throws[i] === 4) {
            countFour = countFour + 1;
        } else if (throws[i] === 5) {
            countFive = countFive + 1;
        } else if (throws[i] === 6) {
            countSix = countSix + 1;
        }   
    }
    if (countOne === 3) {
        total1 = 1000; 
    } 
    if (countTwo >= 3) {
        total2 = 200; 
    } 
    if (countThree >= 3) {
        total3 = 300; 
    } 
    if (countFour >= 3) {
        total4 = 400; 
    } 
    if (countFive === 3) {
        total5 = 500; 
    }
    if (countSix >= 3) {
        total6 = 600; 
    }
    if (countOne === 1) {
        total1 = 100; 
    }
    if (countOne === 2) {
        total1 = 200; 
    }
    if (countOne === 4) {
        total1 = 1100; 
    }
    if (countOne === 5) {
        total1 = 1200; 
    }
    if (countOne === 6) {
        total1 = 2000; 
    }
    if (countFive === 1) {
        total5 = 50; 
    }
    if (countFive === 2) {
        total5 = 100; 
    }
    if (countFive === 4) {
        total5 = 550; 
    }
    if (countFive === 5) {
        total5 = 600; 
    }
    if (countFive === 6) {
        total5 = 1000; 
    }
    finalScore = total1 + total2 + total3 + total4 + total5 + total6; 
    return finalScore; 
}

diceScore(dice1);
diceScore(dice2);
diceScore(dice3); 
diceScore(dice4); 
diceScore(dice5); 
diceScore(dice6);
diceScore(dice7);