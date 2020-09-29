/*

Instructions: Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. 
Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Code below: 

*/

function timeForMilkAndCookies(date) {
    if (date.getDate() === 24 && date.getMonth() === 11) {
        return true;
    } else {
        return false;
    }
}


dateOne = new Date(2020, 11, 24);
dateTwo = new Date(2020, 3, 26);

timeForMilkAndCookies(dateOne);
timeForMilkAndCookies(dateTwo); 
