const deepComp = (obj1, obj2) => {
  console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
};

let obj = { here: { is: "an" }, object: 2 };

console.log(deepComp(obj, { here: { is: "an" }, object: 2 }));
