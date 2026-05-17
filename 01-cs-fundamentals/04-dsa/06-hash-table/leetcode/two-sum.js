// https://leetcode.com/problems/two-sum/submissions/1849245042

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const arr = [];
  const isExist = {};
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (isExist[nums[i]] != undefined) {
      arr.push(isExist[nums[i]]);
      arr.push(i);
      return arr;
    } else {
      isExist[need] = i;
    }
  }
};
