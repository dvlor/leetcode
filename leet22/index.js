// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n < 1) {
    return []
  }
  if (n == 1) {
    return ['()']
  }

  let result = ['()']
  let tmp = []
  for (let i = 1; i < n; i++) {
    result.forEach((r) => {
      // 对每个做处理
      for (let i = 0; i <= r.length; i++) {
        const str = r.substr(0, i) + '()' + r.substr(i, r.length - i)
        if (tmp.indexOf(str) < 0) {
          tmp.push(str)
        }
      }
    })
    result = tmp
    tmp = []
  }
  return result
}
