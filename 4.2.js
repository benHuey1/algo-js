/*
let number = Math.random(); //generate a random number (not an )
console.log(number);
*/

function rand10() {
    let number = Math.floor(Math.random() * 11); //generate a random number between 1 and 10
    return number;
}
console.log(rand10());


/*
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max-min)) + min //This JavaScript function always returns a random number between min (included) and max (excluded)
}
*/
/*
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min //This JavaScript function always returns a random number between min and max (both included)

*/