// Original string
let str = "hgnis jonam si eman ym";

// Initialize an empty string for the reversed result
let reverseStr = "";

// Print the length of the original string
console.log(str.length);

// Loop to reverse the string
for (let i = str.length - 1; i >= 0; i--) {
  // Append each character to the reversed string
  reverseStr += str[i];
  // Uncomment the following line to see the index during each iteration
  // console.log(i);
}

console.log(reverseStr);

