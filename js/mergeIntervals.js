const merge = (arr) => {
  let i = 0,
    ans = [];

  while (i < arr.length - 1) {
    if (arr[i][1] > arr[i + 1][0]) {
      ans.push([arr[i][0], arr[i + 1][1]]);
      i += 2;
    } else {
      ans.push(arr[i]);
      i += 1;
    }
  }

  return ans;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
