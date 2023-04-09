const a = [4, 1];
const b = [1, 1];
function calcDistance(a, b) {
    res = Math.sqrt((Math.pow((b[0] - a[0]), 2)) + (Math.pow((b[1] - a[1]), 2)));
    const result = res.toFixed(2);
    return result;
}
console.log(calcDistance(a, b));