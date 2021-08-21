const isPerfectSquare = (num) => {
  if (num === 1) return true;

  let i = 1;
  let isFound = false;
  while (i * i <= num) {
    if (i * i === num) isFound = true;

    i++;
  }

  return isFound;
};

[1, 4, 9, 10].forEach((num) =>
  console.log({ num, root: isPerfectSquare(num) })
);
