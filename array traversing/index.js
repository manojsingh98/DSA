let array = [10, 34, 22, 54, 8, 7, 35, 76, 23, 111];
//_______________________________________________________________________________________________________________________________
// get value of any particular element in our array
for (let i = 0; i < array.length; i++) {
  console.log(array[1]);
}
//_______________________________________________________________________________________________________________________________
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let el = document.getElementById("putValue").value;
  if (el >= array.length) {
    alert(`Array length is less then ${el}`);
  } else if (el === "") {
    alert("please enter a value");
  } else {
    alert(`${array[el]}  is available on this ${el} position`);
  }
});