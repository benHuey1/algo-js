const number = new Number(prompt("Please enter a number above 0 :")).valueOf();
if (number < 0) {
    alert("Error, the number is under 0...");
} else if (number === 0) {
    alert("The factorial of " + number + " is 1.");
} else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    alert("The factorial of " + number + " is " + fact);
}