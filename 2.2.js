let min = prompt("Enter a number : ", " ");

let max = prompt("Enter a second number : ", "");

let current = prompt("Enter a third number : ", "");

if (min > max) {
    alert("Error, unfortunately you don't understand the exercice..");
}
else if (current < max) {
    alert("Your number : " + current + " is between " + min + " and " + max);
}
else {
    alert("Ok thanks");
}