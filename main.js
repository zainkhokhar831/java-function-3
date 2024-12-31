function lastChar() {
    let str = prompt("Enter a string to get its last character:");
    if (str.length > 0) {
        let lastCharacter = str.charAt(str.length - 1); 
        alert("The last character of the string is: " + lastCharacter);
    } else {
        alert("Please enter a valid string.");
    }
}
lastChar();
