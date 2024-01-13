function anagram(val1, val2) {
  let len1 = val1.length;
  let len2 = val2.length;
  if (len1 !== len2) {
    return false;
  } 
  let data1 = val1.toLowerCase().split("").sort().join('')
  let data2 = val2.toLowerCase().split("").sort().join('')
  console.log(data1,data2);
if(data1 == data2){
    return true
} else{
    return false
}
  
}

console.log(anagram("Listen", "Silent"));
