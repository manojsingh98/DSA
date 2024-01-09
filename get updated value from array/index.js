let str =
  "Application Started, 19-09-2023 13:10:28 <BR> Application Submitted, 19-09-2023 13:52:37 <BR> Approved by - Suryabhan Singh(HE006040), 20-09-2023 11:58:26 <BR> Rejected by OPS - Rohit Vishwakarma(HE001905), 21-09-2023 18:43:43 <BR> Application Submitted, 12-12-2023 17:24:07 <BR> Approved by - Suryabhan Singh(HE006040), 17-12-2023 09:27:39 <BR> Rejected by OPS - Aniket Shinde(HE004683), 18-12-2023 12:03:10 <BR> Application Submitted, 22-12-2023 16:32:44 <BR>";

const arrValue = str.split("<BR>").map((val) => {
  // console.log(val);
  return val;
}).reverse();
console.log(arrValue);

const data = [
  "Application Started",
  "Application Submitted",
  "Approved by",
  "Rejected by OPS",
];

const result = [];

data.forEach((item) => {
  const entry = arrValue.find((e) => e.includes(item));
  if (entry) {
    result.push(entry);
  }
});

console.log(result);