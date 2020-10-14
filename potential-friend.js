/*

Instructions: Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. 
Return true if there's a potential friend!


Examples:

isPotentialFriend(
  ["sports", "music", "chess"],
  ["coding", "music", "netflix", "chess"]
) ➞ true

isPotentialFriend(
  ["cycling", "technology", "drawing"],
  ["dancing", "drawing"]
) ➞ false

isPotentialFriend(
  ["history"],
  ["history"]
) ➞ true


Code below: 

*/

// true below

let arrayOne = ['reading', 'writing', 'tv', 'cycling', 'tennis'];
let arrayTwo = ['tv', 'cycling'];


// true below

let arrayThree = ['writing'];
let arrayFour = ['writing'];

// false below

let arrayFive = ['reading', 'tv', 'cycling'];
let arraySix = ['tennis', 'reading'];

// false below 

let arraySeven = ['reading', 'writing', 'tennis'];
let arrayEight = ['cycling', 'tv'];

// function below

function isPotentialFriend(set1, set2) {
    let friends = false;
    let inCommon = 0;
    for (i = 0; i < set1.length; i++) {
        for (j = 0; j < set2.length; j++) {
            if (set1[i] === set2[j]) {
                inCommon++;
            } 
        }
    }
    if (inCommon > 1 || ((set1[0] === set2[0]) && set1.length === 1 && set2.length === 1)) {
        friends = true;
    }
    return friends;
}

isPotentialFriend(arrayOne, arrayTwo);
isPotentialFriend(arrayThree, arrayFour);
isPotentialFriend(arrayFive, arraySix);
isPotentialFriend(arraySeven, arrayEight); 