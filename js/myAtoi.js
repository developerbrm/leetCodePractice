const myAtoi = function (s) {
  const getNumWithInTheRange = (num) =>
    num > 0 ? Math.min(num, 2 ** 31 - 1) : Math.max(num, 2 ** 31 * -1);

  let match = s.trimLeft().match(/^[- | +]?\d+/gi);

  return match ? getNumWithInTheRange(...match) : 0;
};

[
  // "42",
  // "        -42",
  // "-91283472332",
  // "words and 987",
  // "4193 with words",
  // "  -0012a42",
  // "   -115579378e25",
  "+1",
].forEach((arr) => {
  // myAtoi(arr);
  console.log(myAtoi(arr));
});
