function findMissingNumber(arr) {
  const n = arr.length + 1; // One element is missing
  let expectedSum = (n * (n + 1)) / 2; // Sum of consecutive integers formula
  let actualSum = 0;
  console.log("n:", n, "expectedSum", expectedSum);
  // Calculate the actual sum using a for loop
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  console.log("actual some", actualSum);
  return expectedSum - actualSum;
}

// Example usage:
const numbers = [1, 2, 4];
const missingNumber = findMissingNumber(numbers);
console.log("Missing number:", missingNumber);
