function lastChar() {
    let str = prompt("Enter a name to get its last character:");
    if (str.length > 0) {
        let lastCharacter = str.charAt(str.length - 1); 
        alert("The last character of the name is: " + lastCharacter);
    } else {
        alert("Please enter a valid Name.");
    }
}
lastChar();
