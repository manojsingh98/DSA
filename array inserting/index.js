let data = [11, 22, 33, 55, 66, 77, 88, 99];
let newEl = 44;
let position = 3;
//for add any value in array on a particular position first create a empty space for that value
console.log(data);
for (i = data.length - 1; i >= 0; i--) {
  //   console.log(data[i]);
  if (i >= position) {
    data[i + 1] = data[i];
    if (i == position) {
      data[i] = newEl;
    }
  }
}
console.log(data);


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
