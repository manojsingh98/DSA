// Initial array
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Position to remove an element
let position = 3;
console.log(data);
// Loop through the array starting from the specified position
for (let i = position; i < data.length - 1; i++) {
  // Log the current element at the specified position

  // Shift elements to the left, effectively removing the element at the specified position
  data[i] = data[i + 1];
}
// Adjust the length of the array to remove the last element (which is now a duplicate)
data.length = data.length - 1;
console.log("modified array", data); // Log the modified array

//_______________________________________________________________________________________________________ dynamic code
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log("first Array", array);
const btn = document.getElementById("deleteEl");
function deleteElement() {
  let position = document.getElementById("inputVal").value;
  position = parseInt(position);
  for (i = position; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
array.length = array.length -1
  console.log("final array", array);
}

btn.addEventListener("click", deleteElement);
