// 城市用一个 双向连通 图表示，图中有 n 个节点，从 1 到 n 编号（包含 1 和 n）。图中的边用一个二维整数数组 edges 表示，其中每个 edges[i] = [ui, vi] 表示一条节点 ui 和节点 vi 之间的双向连通边。每组节点对由 最多一条 边连通，顶点不存在连接到自身的边。穿过任意一条边的时间是 time 分钟。

// 每个节点都有一个交通信号灯，每 change 分钟改变一次，从绿色变成红色，再由红色变成绿色，循环往复。所有信号灯都 同时 改变。你可以在 任何时候 进入某个节点，但是 只能 在节点 信号灯是绿色时 才能离开。如果信号灯是  绿色 ，你 不能 在节点等待，必须离开。

// 第二小的值 是 严格大于 最小值的所有值中最小的值。

// 例如，[2, 3, 4] 中第二小的值是 3 ，而 [2, 2, 4] 中第二小的值是 4 。
// 给你 n、edges、time 和 change ，返回从节点 1 到节点 n 需要的 第二短时间 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
  // todo 更优解
  let tmp = []
  // 整理数据
  edges.map((s) => {
    if (tmp[s[0]]) {
      tmp[s[0]].push(s[1])
    } else {
      tmp[s[0]] = [s[1]]
    }
    if (tmp[s[1]]) {
      tmp[s[1]].push(s[0])
    } else {
      tmp[s[1]] = [s[0]]
    }
  })

  // 剪枝
  for (let i = 2; i < n; i++) {
    if (tmp[i].length <= 1) tmp[i] = undefined
  }

  let current = [1]
  let min = false
  let nodes = 0
  while (true) {
    if (min) {
      if (current.indexOf(n) > -1) {
        break
      }
      nodes++
      break
    }
    if (current.indexOf(n) > -1 && !min) {
      min = true
    }
    let next = new Set()
    current.forEach((s) => {
      if (tmp[s]) {
        tmp[s].forEach((d) => next.add(d))
      }
    })
    current = Array.from(next)
    nodes++
  }

  let result = 0
  for (let i = 0; i < nodes - 1; i++) {
    result += time
    if (Math.floor(result / change) % 2) {
      result = result + change - (result % change)
    }
  }
  return result + time
}
module.exports = {
  secondMinimum
}
