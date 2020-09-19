/*

Instructions: 

A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.


Code below: 

*/

function detectWord(str) {
    let newString = ''; 
    for (i = 0; i < str.length; i++) {
        if(((str.charAt(i)).toLowerCase()) === str.charAt(i)) {
            newString = ((str.charAt(i)).toString())
        }
    }
    return newString; 
}