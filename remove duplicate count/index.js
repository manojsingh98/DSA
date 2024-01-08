const data = [2, 4, 6, 9, 5, 4, 6, 8, 5, 5, 4, 2];
let result = [];

// for remove the duplicate count
for(let i = 0; i < data.length;i++){
if(result.indexOf(data[i])== -1){
result.push(data[i])
}
}

// console.log(result);

// for count the duplicate values
const data1 = [2, 4, 6, 9, 5, 4, 6, 8, 5, 8, 4, 2, 6];

const counts = {};

for (let i = 0; i < data1.length; i++) {
  const value = data1[i];

  // If the value is not in the counts object, initialize its count to 1
  if (!counts[value]) {
    
    counts[value] = 1;

  } else {
    // If the value is already in the counts object, increment its count
    counts[value]++;
  }
}

console.log("final data",counts);
