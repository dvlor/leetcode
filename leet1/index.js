// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let temp = new Map()
  nums.forEach((d, index) => temp.set(d, index))
  for (var i = 0; i < nums.length; i++) {
    if (temp.has(target - nums[i]) && temp.get(target - nums[i]) != i) {
      return [i, temp.get(target - nums[i])]
    }
  }
  return [-1, -1]
}

module.exports = {
  twoSum
}
