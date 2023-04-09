
n = new Number(prompt("Enter a number : ")).valueOf();
function multiRand(n) {
    let inputAr = ["Abel", "Alexandra", "Anthony", "Benjamin", "Bruno", "Delphine", "Emilien", "Ethan", "Islmaël", "Jodie", "Julien", "Louka", "Loïc", "Luciano", "Nikko", "Steve", "Sylvain", "Thomas", "Willy"];
    let outputAr = [];
    function rand19() {
        let randNumber = Math.floor(Math.random() * 20); //generate a random number between 1 and 19
        return randNumber;
    };
    for (let i = 0; i < n; i += 1) {
        a = rand19();
        while (outputAr.includes(a)) {
            a = rand19();
            return a;
        }
        outputAr.push(inputAr[a]);
    }
    return outputAr;
};
console.log(multiRand(n));

/*

const n = new Number(prompt("Please enter a number between 1 & 19 : ")).valueOf();


if ((n < 0) || (n > arr.length)) {
    alert("Sorry, the number is not what I want, bye.");
    //const n = new Number(prompt("Please enter a number between 1 & 19 : ")).valueOf();
    //return n;
} else if ((n > 0) & (n <= arr.length)) {
console.log(multiRand(n));

} else if (n === 0) { // comment faire pour différencier le '0' comme valeur du '0' correspondant à la touche 'Annuler' ???
    alert("So you don't wanna play..ok no problem");
} else {
    alert("ERROR, that is not a number!");
}
*/