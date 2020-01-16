// 1: Using the loop from question 5 above, only log the counter variable if it is an even number.
for (var count = 15; count <= 25; count++);

if (count % 2) {
    console.log("This is an even number");
} else {
    console.log("This is an odd number");
}


/* 2: Create a function that logs the sentence "I am a function".
      Assign this function to a variable called innerFunction.

      Create another function called outerFunction that accepts one argument.
      Inside outerFunction, call the argument like you would a function - with parenthesis ().
      Call outerFunction and pass in the innerFunction variable. */
function innerFunction () {
    console.log("I am a function");
}

function outerFunction (argument) {
    argument();
}

outerFunction(innerFunction);