var maxSubArray = function(nums) {
        var sum = 0;
    return nums.reduce((max, curr) => {
        sum = curr + (sum > 0 ? sum : 0);
        return Math.max(max, sum);
    }, -Infinity);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-2147483647]));
console.log(maxSubArray([0]));
