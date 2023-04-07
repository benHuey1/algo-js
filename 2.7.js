let numbers = [];
let count = new Number(prompt("Enter a number (not above 10 please): ")).valueOf();
for (i = 0; i < count; i++) {
    if (count > 10) {
        alert("So you wanna play... Sorry man, BYE");
        break;
    } else if (count < 10) {
        let youNumber = new Number(prompt("Good, now enter another number : ")).valueOf();
        let newLength = numbers.push(youNumber);
    }
};
var total = 0;
for (var i in numbers) {
    total += numbers[i];
}
alert("The sum of your numbers is : " + total);