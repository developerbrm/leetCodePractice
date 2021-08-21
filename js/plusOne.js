const plusOne = (digits) => {
  let i = digits.length - 1;

  while (digits[i] !== undefined) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }

    i--;
  }

  digits.unshift(1);
  return digits;
};

[
  // [8, 9, 9, 9],
  [8, 9, 4, 5, 0, 0, 7, 9],
  // [1, 2, 3],
  // [4, 3, 2, 1],
  // [0],
  // [1],
  // [9],
  // [9, 9],
  // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3],
  // [12, 2, 3, 4, 5, 6],
  // [12, 2, 3, 4, 5, 6],
  // [12, 2, 3, 4, 5, 6],
].forEach((arr) => {
  // plusOne(arr);
  console.log(plusOne(arr));
});
