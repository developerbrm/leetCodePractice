const getPossibleSquareRoot = (num, i, j) => {
  let mid = (i + j) / 2;
  let mul = mid * mid;
  if (mul === num || Math.abs(mul - num) < 0.00001) return mid;
  else if (mul < num) return getPossibleSquareRoot(num, mid, j);
  else return getPossibleSquareRoot(num, i, mid);
};

const mySqrt = (num) => {
  if (num <= 1) return num;

  let i = 1;
  while (true) {
    //perfect square
    if (i * i === num) return i;
    else if (i * i > num) {
      return Math.floor(getPossibleSquareRoot(num, i - 1, i));
    }

    i++;
  }
};

[2, 8].forEach((num) => console.log({ num, root: mySqrt(num) }));
