/*

Instructions: 

Create a function that changes specific words into emoticons. 
Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

smile	:D
grin	:)
sad	    :(
mad	    :P


Examples:

emotify("Make me smile") ➞ "Make me :D"

emotify("Make me grin") ➞ "Make me :)"

emotify("Make me sad") ➞ "Make me :("

Notes:

The sentence always starts with "Make me".
Try to solve this without using conditional statements like if/else or switch.

Code below: 

*/

function emotify(str) {
    str = str.replace( /smile/g , ":D" );
    str = str.replace( /grin/g , ":)" );
    str = str.replace( /sad/g , ":(" );
    str = str.replace( /mad/g , ":P" );
    return str; 
}

emotify("Make me smile");

emotify("Make me grin");

emotify("Make me sad");

emotify("Make me mad"); 

emotify("I am so mad"); 

emotify("I am so mad and sad, but I wish I could grin and smile and then smile some more.")

// my solution works regardless of how the sentence starts and also accounts for multiple uses of the different words