let data = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

// Element to search for in the array
let seacrhEL = 80;

// for (let i = 0; i < data.length; i++) {
//   if (data[i] == seacrhEL) {
//     console.log(data.indexOf(seacrhEL));
//   }
// }

// Variable to store the index of the searched element (initialize as null)
let index = null; //we can do this as an undefine also

// Loop through the array to find the index of the search element
for (let i = 0; i < data.length ; i++) {
  // Check if the current element is equal to the search element
  if (data[i] == parseInt(seacrhEL)) {
    // If found, store the index and break out of the loop (optional)
    index = i;
    break;
  }
}

// Print the index of the search element (null if not found)
console.log(index);
