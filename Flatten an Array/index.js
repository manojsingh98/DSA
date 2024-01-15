let data = [1, 2, [3, 4, 5], [1, 3, 5, [1, 2, [1, 2]]], 33, 44, [55, 66]];

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

let flattenedArray = flattenArray(data);
console.log(flattenedArray);



