//给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  let max = 1440
  // 鸽巢原理 应该有1440个时刻 如果数组大于这个值则必定重复
  if (timePoints.length > 1440 || timePointsSorted.length <= 1) {
    return 0
  }
  const timePointsSorted = timePoints.map((d) => d.substr(0, 2) * 60 + parseInt(d.substr(3))).sort((a, b) => a - b)
  let result = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < timePointsSorted.length; i++) {
    if (timePointsSorted[i] == timePointsSorted[i - 1]) {
      return 0
    }
    result = Math.min(result, timePointsSorted[i] - timePointsSorted[i - 1])
  }
  return Math.min(result, timePointsSorted[0] - timePointsSorted[timePointsSorted.length - 1] + max)
}
