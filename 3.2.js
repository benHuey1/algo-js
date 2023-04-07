let arr = [1, 2, 3, 4, 5];
let total = 0;
let aver = 0;
for (var i in arr) {
    total += arr[i];
}
aver = total / arr.length;
alert("The average value of my array is : " + aver);

let arr_2 = [100, 101, 102];
let total_2 = 0;
let aver_2 = 0;
for (var i in arr_2) {
    total_2 += arr_2[i];
}
aver_2 = total_2 / arr_2.length;
alert("The average value of my array is : " + aver_2);