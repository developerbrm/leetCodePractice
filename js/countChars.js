const countChars = (string, ch) => {
  let count = 0;
  for (let char of string) {
    if (char === ch) count++;
  }

  return count;
};

console.log(countChars(`stsrsisnsg`, `s`));
