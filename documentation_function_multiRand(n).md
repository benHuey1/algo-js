*The function "multiRand(n)"*

*The code language :*
Javascript

*Purpose :*
The purpose of the actual function is to generate an array with random numbers between 1 & 10. The length of the array is asked to the user.

*The structure of the code :*
function multiRand(n) {
    let arr = [];		// create a empty array.
    for (let i = 0; i < n; i += 1) {	// the loop allows to generate a random number as long as the size of the array is not reached.
        arr.push((rand10()));		// insert a random number between 1 & 10.
    }
    return arr;	// return the array.
};
