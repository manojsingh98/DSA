// Initial array
let data = [11, 22, 33, 55, 66, 77, 88, 99];
// New element to be added
let newEl = 44;
// Position where the new element should be added
let position = 3;
console.log(data); // Log the initial array
// Loop through the array in reverse to create space for the new element
for (let i = data.length - 1; i >= 0; i--) {
  // Check if the current index is greater than or equal to the specified position
  if (i >= position) {
    // Shift elements to the right to create space for the new element
    data[i + 1] = data[i];
    // If the current index is equal to the specified position, insert the new element
    if (i == position) {
      data[i] = newEl;
    }
  }
}
console.log("modified data",data); // Log the array after adding the new element



// with some input and button ________________________________________________
//note: validation not added yet______________________________________________
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let addPosition = document.getElementById("addPosition").value;
  let addValue = document.getElementById("addValue").value;
  addValue = parseInt(addValue)

  for (let i = array.length - 1; i >= 0; i--) {
    if (i >= addPosition) {
      array[i + 1] = array[i];
      if (i == addPosition) {
        array[i] = addValue;
      }
    }
  }
  console.log("input array", array);
});



// we can do this with splice function as well 
