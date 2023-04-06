let favoriteNumber = prompt("Please enter your favorite number : ", "");

while (favoriteNumber != 42) {
    if (confirm("Are you sure?") == true) {
        favoriteNumber = prompt("Please enter another favorite number : ", "");
    } else {
        favoriteNumber = prompt("Please enter your favorite number : ", "");
    }
}
alert("Ok that's my favorite number too !");
