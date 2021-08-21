const getRandNum = () => Math.floor(Math.random() * 100);
const getArr = (l = 3 ) => [...Array(l)].map(getRandNum);

const arrToList = (arr, l = 0) =>
  l >= arr.length ? null : { value: arr[l], rest: arrToList(arr, ++l) };

const listToArr = ({ value, rest }) =>
  rest ? [value, ...listToArr(rest)] : [value];

// console.log(listToArr(arrToList(getArr(100))));
console.log(arrToList(getArr()))
