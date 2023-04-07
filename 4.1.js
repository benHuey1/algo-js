/*
const a = 12;
const b = 23;
area = '';
function calcSurface(a, b) {
    return a * b;
}
console.log("First program - The surface of the default rectangle is " + calcSurface(a, b));
*/

const length = new Number(prompt("We are gonna draw a rectangle, first enter the value of the lenght :").valueOf());
const width = new Number(prompt("Now enter the value of the width : ").valueOf());
function calcSurface(lenght, width) {
    return lenght * width;
}
alert("The surface of your rectangle is " + calcSurface(length, width));
