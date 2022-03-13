// const twoSum = (nums, target, prevMap = null) => {
//   if (!!!nums?.length) return;

//   const ans = [];
//   let flag;

//   const mainMap = new Map();

//   for (const [key, value] of Object.entries(nums)) {
//     // if (value > target) continue;
//     mainMap.set(Symbol(value), { key, value });
//   }

//   const getMatch = (target, currMap, flag = false) => {
//     if (flag || !!!currMap.size) return;

//     // console.log({ currMap });

//     const current = [...currMap.keys()].reduce((val, next) => {
//       if (flag) return;

//       if (currMap.get(val)["value"] + currMap.get(next)["value"] === target) {
//         ans.push(currMap.get(val)["key"], currMap.get(next)["key"]);

//         flag = true;
//       } else return val;
//     });

//     // console.log({ currMap });

//     currMap.delete(current);
//     getMatch(target, currMap, flag);
//   };

//   // console.log(mainMap);

//   getMatch(target, mainMap);

//   mainMap.clear();

//   const finalAns = !!ans.length ? ans : undefined;

//   // console.log(finalAns);

//   return finalAns;
//   // return mainMap;
// };


var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {

    let comp = target - nums[i];
    console.log({map, comp});
    if (map.has(comp)) return [map.get(comp), i];
    else map.set(nums[i], i);
  }
};


[
  // { nums: [2, 7, 11, 15], target: 9 },
  // { nums: [3, 2, 4], target: 6 },
  // { nums: [3, 3], target: 6 },
  { nums: [-3, 4, 3, 90], target: 0 },
  // { nums: [0, 0], target: 0 },
].forEach(({ nums = [], target }) => {
  console.log(twoSum(nums, target));
  // twoSum(entry);
});
