// Alice 和 Bob 再次设计了一款新的石子游戏。现有一行 n 个石子，每个石子都有一个关联的数字表示它的价值。给你一个整数数组 stones ，其中 stones[i] 是第 i 个石子的价值。

// Alice 和 Bob 轮流进行自己的回合，Alice 先手。每一回合，玩家需要从 stones 中移除任一石子。

// 如果玩家移除石子后，导致 所有已移除石子 的价值 总和 可以被 3 整除，那么该玩家就 输掉游戏 。
// 如果不满足上一条，且移除后没有任何剩余的石子，那么 Bob 将会直接获胜（即便是在 Alice 的回合）。
// 假设两位玩家均采用 最佳 决策。如果 Alice 获胜，返回 true ；如果 Bob 获胜，返回 false 。
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  if (stones.length <= 1) {
    return false
  }

  let tmp = [0, 0, 0]
  stones.forEach((d) => {
    tmp[d % 3]++
  })
  let sum1 = tmp[1],
    sum2 = tmp[2],
    sum3 = tmp[0]

  // 没有1 或 2
  if (sum1 == 0 || sum2 == 0) {
    if (sum2 + sum1 > 2) {
      return sum3 % 2 == 1
    }
  }
  if (sum2 + sum1 <= 2) {
    if (sum1 == 0 || sum2 == 0) {
      return false
    }
  }

  if (sum3 % 2 == 1) {
    if (Math.abs(sum1 - sum2) <= 2) {
      return false
    }
  }
  return true
}
