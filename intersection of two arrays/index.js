let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [4, 5, 6, 7, 8, 9, 10, 5, 1];

function uniqueData(arr1, arr2) {
  let result = [];
  for (i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        result.push(arr2[j]);
        break;
      }
    }
  }
  return result;
}

let finalArray = uniqueData(array1, array2);
console.warn(finalArray);
