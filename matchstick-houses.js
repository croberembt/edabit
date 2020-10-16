/*

Instructions: Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.


Examples:

matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436

Note:

Step 0 returns 0 matchsticks.
The input (step) will always be a non-negative integer.
Think of the input (step) as the total number of houses that have been connected together.


Code below: 

*/

function matchHouses(step) {
    if (step === 0) {
        return 0;
    }
    else {
     return (step * 5) + 1;
    }
}

// step 0 = 0
// step 1 = 6
// step 2 = 6 + 5 or step 1 plus 5 = 11
// step 3 = 11 + 5 = 16
// step 4 = 16 + 5 = 21 
// stepCurrent = stepPrior + 5 