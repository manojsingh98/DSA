function moveZeroesToEnd(nums) {
  let nonZeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroCount] = nums[i];
      nonZeroCount++;
      console.log(nonZeroCount);
    }
  }

  for (let i = nonZeroCount; i < nums.length; i++) {
    nums[i] = 0;
  }
}

const array = [1, 0, 2, 0, 13, 0, 4, 0, 5, 0, 16];
moveZeroesToEnd(array);
console.log(array);
