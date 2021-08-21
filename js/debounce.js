class Debounce {}

let debouncing = false;

const debouce = (cb, delay) => {
  if (debouncing) return;

  debouncing = true;

  setTimeout(() => {
    cb();
    debouncing = false;
  }, delay);
};

const sayHi = (msg) => console.log(msg || "Hello")



debouce(() => sayHi("lol"), 10)
debouce(() => sayHi("lol"), 1000)
debouce(() => sayHi(), 1000)