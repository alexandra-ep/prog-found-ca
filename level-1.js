// 1: Declare and initialise a variable with a string value.
var myName = "Alexandra";


// 2: Create an object variable called person and give it two properties (a key and a value) of your choice.
var person = {
    name: "Christine",
    age: 24
}


/* 3: Create a variable called outOfStock and assign it a boolean value.
      Create an if else statement that checks the value of outOfStock.
      If it is true, console log "Out of stock". Otherwise log "In stock". */
var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
  } else {
    console.log("In stock");
  }


/* 4: Create an array of five numbers.
      Loop through the array and console log each value. */
var fiveNumbers = [3, 5, 7, 11, 17];

for (var i = 0; i < fiveNumbers.length; i++) {
    console.log(fiveNumbers[i]);
}


// 5: Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
for (var count = 15; count <= 25; count++) {
    console.log(count);
}


// 6: Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
if (count === 20) {
    console.log(count);
}


/* 7: Create an array of two objects. Each object must have the same three properties (with different values):
        one property with a string value
        one property with a number value
        one property with a boolean value
      Loop through the array and console log the number value and the boolean value. */
var twoPeople = [
    {
        name: "James",
        age: 56,
        wearingGlasses: true
    },
    {
        name: "Jessica",
        age: 32,
        wearingGlasses: false
    }
];

for(var i = 0; i < twoPeople.length; i++) {
    console.log(twoPeople[i].age);
    console.log(twoPeople[i].wearingGlasses);
  }


/* 8: Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
      Inside the function, log the string "I don't like " together with the argument.
      Call the function and pass in a value of your choice. */
function whatIDontLike(foodItem) {
    console.log("I don't like " + foodItem);
}

whatIDontLike("chicken");


/* 9: Create a function that accepts two arguments.
      Inside the function, subtract the second argument from the first and console log the result. */
function subtraction(argument1, argument2) {
    var total = argument1 - argument2;
    console.log(total);
}


/* 10: Create an empty array.
       Create a function that accepts one argument.
       Inside the function, add the argument to the array.
       Call the function and pass in a value of any type. */
var petArray = [];

function usingPush(animal) {
    petArray.push(animal);
}

usingPush("dog");