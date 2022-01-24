// 给你一个字符串 s，找到 s 中最长的回文子串。
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const length = s.length
  let result = 0
  let resultLength = 1
  let j = 1
  for (let i = length - 1; i > 0; i--) {
    // 间隔一回文
    while (s[i - j] === s[i + j] && s[i + j] !== undefined) {
      j++
    }
    if (j > 1 && resultLength <= j * 2 - 1) {
      resultLength = j * 2 - 1
      result = i - j + 1
    }
    // 无间隔回文
    j = 1
    while (s[i + j - 1] === s[i - j] && s[i - j] !== undefined) {
      j++
    }
    if (resultLength <= j * 2 - 2) {
      resultLength = j * 2 - 2
      result = i - j + 1
    }

    if (resultLength && i * 2 + 1 < resultLength) {
      break
    }
  }
  return s.substr(result, resultLength)
}