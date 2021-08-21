const  isNumber = function(s) {

  let ans = s.trim().match(/ /ig)


  return ans
    
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
  // isNumber(arr);
  console.log(isNumber(arr));
});
