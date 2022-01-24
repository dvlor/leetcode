// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let str = s
  let rule = p

  // 当前匹配操作成功 看是否还有后续匹配 没了就说明成功了 有后续匹配就把后入匹配入栈 否则继续下一个
  const strLength = str.length
  // 当前匹配操作成功,并且没有后续匹配
  if ((!rule && !str) || rule === '.*' || (strLength === 1 && rule === '.')) {
    return true
  }
  // 当前匹配失败
  if (!rule && str) {
    return false
  }

  // 处理有重复的情况
  if (rule[1] === '*') {
    const nextRule = rule.substr(2)
    // 空字符串继续匹配下一个
    if (str === '') {
      return isMatch('', nextRule)
    }
    // 非空处理
    for (let i = 0; i < strLength; i++) {
      // 特定重复判断
      if (str[i] != rule[0] && rule[0] !== '.') {
        if (isMatch(str.substr(i), nextRule)) {
          return true
        }
        break
      }
      if (isMatch(str.substr(i), nextRule)) {
        return true
      }
      if (i === strLength - 1) {
        if (isMatch('', nextRule)) {
          return true
        }
      }
    }
  } else {
    // 处理没有重复需要处理的情况
    // 当前满足
    if ((rule[0] === '.' && str[0]) || rule[0] === str[0]) {
      return isMatch(str.substr(1), rule.substr(1))
    }
  }
  return false
}
