let arr = [112, 34, 76, 90, 43, 67, 97, 54, 65, 15, 677, 98, 44,8,11];

let smallest = arr[0];
let largest = arr[0];

for (let i = 0; i <arr.length;i++){
  if(arr[i] < smallest){
    smallest = arr[i]
  }
    if( arr[i] > largest ){
        largest = arr[i]
    }
}
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] < arr[i + 1]){
//         smallest = arr[i]
//     }
// }  //thid code not will be work because if smallest value present in the last index so our loop dose not have any value for comparing last value to next value
console.log("smallest value: ", smallest);
console.log("largest value: ", largest);
