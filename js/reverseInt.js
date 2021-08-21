const getReverse = (num) => Number(String(num).split("").reverse().join(""));

const reverse = (num) => {
  let isNegetive = false;
  if (num === 0) return 0;
  if (num < 0) isNegetive = true;
  let ans = isNegetive ? -1 * getReverse(Math.abs(num)) : getReverse(num);
  return Math.abs(ans) > 2 ** 31 ? 0 : ans;
};

[123, -123, 120, 0, 1534236469].forEach((num) =>
  console.log({ num, reverse: reverse(num) })
);
