/*

Instructions: 

Create a function that takes a number as an argument and returns the appropriate error message. 
You should do this without using the switch or if statements.

The input error will be 1 to 5:

1 >> "Check the fan"
2 >> "Emergency stop"
3 >> "Pump Error"
4 >> "c"
5 >> "Temperature Sensor Error"

Examples:

error(1) ➞ "Check the fan: e1"

error(2) ➞ "Emergency stop: e2"

error(3) ➞ "Pump Error: e3"

Code below: 

*/

function error(n) {
   errArray = ['Check the fan: e1', 'Emergency stop: e2', 'Pump Error: e3', 'c: e4', 'Temperature Sensor Error: e5']; 
   if (errArray[n - 1] === undefined) {
       return 101; 
   } else {
   return errArray[n - 1]; 
   }
}

error(1);
error(2);
error(3);
error(4);
error(5);
error(-12);
error(7); 