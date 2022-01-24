// 给你一个整数 n，请你帮忙统计一下我们可以按下述规则形成多少个长度为 n 的字符串：

// 字符串中的每个字符都应当是小写元音字母（'a', 'e', 'i', 'o', 'u'）
// 每个元音 'a' 后面都只能跟着 'e'
// 每个元音 'e' 后面只能跟着 'a' 或者是 'i'
// 每个元音 'i' 后面 不能 再跟着另一个 'i'
// 每个元音 'o' 后面只能跟着 'i' 或者是 'u'
// 每个元音 'u' 后面只能跟着 'a'
// 由于答案可能会很大，所以请你返回 模 10^9 + 7 之后的结果。

/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  if (n <= 0) {
    return 0
  }
  if (n === 1) {
    return 5
  }
  const mod = 1000000007
  let tmp = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1
  }

  while (n > 1) {
    let tmp2 = {
      a: (tmp.u + tmp.e + tmp.i) % mod,
      e: (tmp.a + tmp.i) % mod,
      i: (tmp.e + tmp.o) % mod,
      o: tmp.i % mod,
      u: (tmp.i + tmp.o) % mod
    }
    // 赋值
    tmp = tmp2
    n--
  }
  return (tmp.a + tmp.e + tmp.i + tmp.o + tmp.u) % mod
}
