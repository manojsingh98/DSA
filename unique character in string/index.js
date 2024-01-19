
function hasUniqueCharacters(str) {
    // Use a set to keep track of unique characters
    const charSet = new Set();
console.log(charSet);
    // Iterate through each character in the string using a for loop
    for (let i = 0; i < str.length; i++) {
        // Get the current character
        const char = str[i];

        // If the character is already in the set, it's not unique
        if (charSet.has(char)) {
            return false;
        }

        // Otherwise, add it to the set
        charSet.add(char);
    }

    // If the loop completes, all characters are unique
    return true;
}

// Example usage:
const testString1 = "abcdefg";
const testString2 = "hello";

console.log(hasUniqueCharacters(testString1)); // Output: true
console.log(hasUniqueCharacters(testString2)); // Output: false
