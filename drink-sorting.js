/*

Instructions: 

You will be given an array of drinks, with each drink being an object with two properties: name and price. 
Create a function that has the drinks array as an argument and return the drinks object sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]

Examples:

sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

Code below: 

*/

drinks1 = [{name: "lime", price: 10}, {name: "lemonade", price: 50}, {name: "water", price: 30}];
drinks2 = [{name: "lime", price: 100}, {name: "lemonade", price: 50}, {name: "water", price: 20}, {name: "gingerale", price: 250}];
drinks3 = [{name: "lime", price: 10}, {name: "lemonade", price: 50}];
drinks4 = [{name: "lime", price: 60}, {name: "lemonade", price: 50}, {name: "lemonade", price: 100}];

function sortDrinkByPrice(arr) {
    function findAscending (a, b) {
        let drinkA = a.price; 
        let drinkB = b.price;
        return drinkA-drinkB; 
    }
    return arr.sort(findAscending); 
} 

// OR

function sortDrinkByPrice(arr) {
    let done = false; 
    while (!done) { 
        done = true; 
        for (let i = 1; i < arr.length; i += 1) { 
            if (arr[i - 1].price > arr[i].price) { 
                done = false; 
                let list = arr[i - 1]; 
                arr[i - 1] = arr[i]; 
                arr[i] = list; 
            }
        }
    }
    return arr; 
}

// OR

function sortDrinkByPrice(arr) {
    let done = false; 
    while (!done) { 
        done = true; 
        for (let i = 1; i < arr.length; i += 1) { 
            if (arr[i - 1].price > arr[i].price) { 
                done = false; 
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]]; 
            }
        }
    }
    return arr; 
}

sortDrinkByPrice(drinks1); 
sortDrinkByPrice(drinks2); 
sortDrinkByPrice(drinks3); 
sortDrinkByPrice(drinks4); 

// my brain is fried tonight so here are my thoughts
// i need to access the property of the objects of specific indexes in the array
// i then need to compare the indices to see if the price is higher or lower
// if it is higher than keep going, if it is lower then push that onto the new array? 