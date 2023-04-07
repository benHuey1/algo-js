let number = new Number(prompt("Please enter a number between 1 & 7 includes")).valueOf();
let day = "";

switch (number) {
    case 1: {
        day = "Monday";
        break;
    }
    case 2: {
        day = "Tuesday";
        break;
    }
    case 3: {
        day = "Wednesday";
        break;
    }
    case 4: {
        day = "Thursday";
        break;
    }
    case 5: {
        day = "Friday";
        break;
    }
    case 6: {
        day = "Saturday";
        break;
    }
    case 7: {
        day = "Sunday";
        break;
    }
    default: {
        day = "NOTHING";
        alert("This is not a number between 1 & 7 includes");
    }
}
alert("So it's  " + day + " today !");

/*
switch (number) {
    case 1: {
        alert("So it's Monday today !");
        break;
    }
    case 2: {
        alert("So it's Tuesday today !");
        break;
    }
    case 3: {
        alert("So it's Wednesday today !");
        break;
    }
    case 4: {
        alert("So it's Thursday today !");
        break;
    }
    case 5: {
        alert("So it's Friday today !");
        break;
    }
    case 6: {
        alert("So it's Saturday today !");

        break;
    }
    case 7: {
        alert("So it's Sunday today !");
        break;
    }
    default: {
        alert("This is not a number between 1 & 7 includes");
    }
}
*/