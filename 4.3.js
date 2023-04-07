function rand10() {
    let number = Math.floor(Math.random() * 11); //generate a random number between 1 and 10
    return number;
};

function multiRand(n) {
    let arr = [];
    for (let i = 0; i < n; i += 1) {
        arr.push((rand10()));
    }
    return arr;
};

let n = new Number(prompt("Please enter a number to generate random numbers (not more than 30 please) :").valueOf());
//for (i = 0; i < n; i++) {
if (n > 30) {
    alert("So you wanna play... Sorry man, BYE");
} else if (n <= 30) {
    console.log(multiRand(n));
    alert("Look at your array in the 'console'");
}