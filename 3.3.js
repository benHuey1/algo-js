let arr = [1, 2, 3, 4, 5];
let arr_2 = [];
let count = 0;
for (let i = 0; i < arr.length; i += 1) {
    arr_2[i] = arr[i];
}
console.log("The first array " + "(" + arr + ")");
console.log("The copied array 2 with my method " + "(" + arr_2 + ")");

let arr_3 = [];
for (let i = 0; i < arr.length; i += 1) {
    arr_3.push((arr[i]));
}
console.log("The copied array 3 with the push method " + "(" + arr_2 + ")");


let arr_4 = [...arr];

console.log("The copied array 4 with the copied method '...' " + "(" + arr_4 + ")");

console.log("The copied array 5 with the copied method 'slice' " + "(" + (arr.slice()) + ")");