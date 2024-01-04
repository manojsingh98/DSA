let data = [1, 2, 3, 4];
let data2 = [5, 6, 7, 8, 9];
let data3 = [];

// Copy elements from data array to 'data3' array
for (let i = 0; i < data.length; i++) {
  data3[i] = data[i];
}

// Copy elements from 'data2' array to data3 array starting from the index after the last element of 'data'
for (let i = 0; i < data2.length; i++) {
  data3[data.length + i] = data2[i];
}

console.log(data3); //final result
