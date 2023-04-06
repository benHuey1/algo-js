let number = prompt("Please enter a number between 1 & 7 includes", "");
let day = "";
switch (number) {
    case 1:
        day = "Monday";
        console.log('${day}');
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday";
        break;
}
alert(day + 'ok');