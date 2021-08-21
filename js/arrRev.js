const arrRev = (arr) => {
  const n = Math.floor(arr.length / 2);
  const l = arr.length - 1;

  for (let i = 0; i < n; i++) {
    [arr[i], arr[l - i]] = [arr[l - i], arr[i]];
  }

  return arr;
};

console.log(arrRev([1, 2, 3, 4, 5]));
