function reverseString(value) {
    let reversrdValue = "";

    value.split("").forEach((char) => {
        reversrdValue = char + reversrdValue;
    });
    return reversrdValue;
}
console.log(reverseString("Reverse Me"));