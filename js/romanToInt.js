class Debounce {
  debounceTimer;
  debounce(cb, delay) {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(cb, delay);
  }
}

const myDebounce = new Debounce();
const romanNumMap = new Map();

const romanToInt = function (s) {
  if (!s.length) return;

  romanNumMap.set(++romanNumMap.size,s);

  myDebounce.debounce(() => {
    console.log(romanNumMap);
  }, 3000);

  const refObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  return s
    .match(/(iv|ix|xl|xc|cd|cm)|[\w]/gi)
    .reduce((acc, ch) => acc + refObj[ch], 0);
};

["MCDLXXVI", "I", "III"].forEach((s) => {
  romanToInt(s);
  // console.log(romanToInt(s));
});
