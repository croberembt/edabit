/*

Instructions: 

In Digital Decipher, decoding is done by the simple addition of numbers in the key and the corresponding characters on a given array. 
Create a function that takes two arguments; a positive integer and an array of integers and returns a decoded message as string.

Assign a unique number to each letter of the alphabet.

 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9  10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
 14 15 16 17 18 19 20 21 22 23 24 25 26

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:

eMessage = [20, 12, 18, 30, 21] 
key = 1993

digitalDecipher(eMessage, key) ➞ "scout"

Write the corresponding number against each character:

 s  c  o  u  t
19  3 15 21 20

Add to each obtained digit consecutive digits from the key:

   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21

See the below example for a better understanding:

eMessage = [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
key = 1939

digitalDecipher(eMessage, key) ➞ "masterpiece"

   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8

Examples:

digitalDecipher([20, 12, 18, 30, 21], 1939) ➞ "scout"

digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990) ➞ "mubashir"

digitalDecipher([6, 4, 1, 3, 9, 20], 100) ➞ "edabit"

Notes: 

N/A

Code below: 

*/

let arr1 = [20, 12, 18, 30, 21];
let arr2 = [14, 30, 11, 1, 20, 17, 18, 18];
let arr3 = [6, 4, 1, 3, 9, 20];
let arr4 = [4, 25, 14, 13]
let key1 = 1939;
let key2 = 1990;
let key3 = 100;
let key4 = 1254714; 


function digitalDecipher(eMessage, key) {
    let characterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
    let newCharacterArray = []; 
    let answer = ''; 
    let keyArray = Array.from(String(key), Number); 
    let j = 0; 
    for (i = 0; i < eMessage.length; i++) { // this iterates once through the eMessage input array
        newCharacterArray.push(characterArray[((eMessage[i] - keyArray[j]) - 1)]);
        j++ // this increments the index of the keyArray
        if (j >= keyArray.length) { // this restarts the keyArray back at 0 once the index is at the end of the keyArray
            j = 0; 
        }
    }
    answer = newCharacterArray.join(''); 
    return answer; 
}



digitalDecipher(arr1, key1);
digitalDecipher(arr2, key2);
digitalDecipher(arr3, key3);
digitalDecipher(arr4, key4); 


// 0 represents each item of the keyArray from index 0 though to the end of length of 
// array starting back again until through the full decipheredNumberArray
// the 0 will be replaced by figuring out how to cycle through each digit of the 
// key, repeating until the end of the input array 

// until you reach the end of the length of the eMessage array, update the keyNumber to index 0 through end of the length and then update it back at 0 

// first iteration, you want to update the keyNumber until the end of the KeyArray and then start back at 0 - you only need to do this one time - one loop 
// how do you do this with just one loop 