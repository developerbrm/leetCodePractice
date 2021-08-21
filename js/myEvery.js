const every = (arr, fn) => {
  // for (let item of arr) {
  //   if (!fn(item)) return false;
  // }

  return arr.some((x) => !fn(x)) ? false : true;
};

console.log(every([], (x) => x < 5));
