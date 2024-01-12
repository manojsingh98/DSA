let str = "amit dipanshu manoj roopam ashish";

let getName = str.split(" ");
let result = "";

for (let i = 0; i < getName.length; i++) {
  const finalCount = getName[i].charAt(0).toUpperCase() + getName[i].slice(1, -1) + getName[i].slice(-1).toUpperCase() + " "

  result += finalCount ;
}

console.log(getName);
console.log(result);
