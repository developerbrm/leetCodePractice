const isEven = (num, i = 0) => {
  if (num < 0) return `not a natural number`
  if (num === 0) return `${i} steps: Even `;
  else if (num === 1) return `${i} steps: Odd `;

  return isEven(num - 2, ++i);
};

console.log(isEven(-12));
