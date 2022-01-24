// 跳跃游戏 IV
// 给你一个整数数组 arr ，你一开始在数组的第一个元素处（下标为 0）。

// 每一步，你可以从下标 i 跳到下标：

// i + 1 满足：i + 1 < arr.length
// i - 1 满足：i - 1 >= 0
// j 满足：arr[i] == arr[j] 且 i != j
// 请你返回到达数组最后一个元素的下标处所需的 最少操作次数 。

// 注意：任何时候你都不能跳到数组外面。
/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  let arrLength = arr.length
  if (arrLength <= 1) {
    return 0
  }
  if (arr[0] == arr[arrLength - 1]) {
    return 1
  }

  // 准备工作
  // 2. 需要把重复节点去掉
  let tmpArr = []
  arr.forEach((d) => {
    if (tmpArr[tmpArr.length - 1] == d) {
      return
    }
    tmpArr.push(d)
  })
  arr = tmpArr
  // 1.获取所有数据的重复次数
  let cache = new Map()
  arr.forEach((d, index) => {
    if (index == 0) {
      return
    }
    if (cache.has(d)) {
      cache.get(d).push(index)
    } else {
      cache.set(d, [index])
    }
  })
  // 2.找到倒数第一个重复次数大于1的数值 意味着到这里之后就只能一步步走了
  let add = 0
  let end = arr.length - 1
  for (let i = arr.length - 1; i > 0; i--) {
    if (cache.get(arr[i]).length == 1) {
      continue
    }
    add = arr.length - i - 1
    end = i
    break
  }

  // 当前位置
  let allSteps = []
  let tmpAllSteps = []

  // 已走过节点
  let arrived = new Map()
  arrived.set(0, true)
  // 移动步数
  let step = 1

  if (cache.has(arr[0])) {
    cache.get(arr[0]).forEach((i) => {
      if (!arrived.has(i)) {
        allSteps.push(i)
        arrived.set(i, true)
      }
    })
  }

  if (!arrived.has(1)) {
    allSteps.push(1)
    arrived.set(1, true)
  }

  while (true) {
    if (allSteps[allSteps.length - 1] == end) {
      // 已经到最后一个节点了
      return step + add
    }
    for (let n = 0; n < allSteps.length; n++) {
      let lastIndex = allSteps[n]

      if (!arrived.has(lastIndex + 1)) {
        tmpAllSteps.push(lastIndex + 1)
        arrived.set(lastIndex + 1, true)
      }
      if (lastIndex > 1 && !arrived.has(lastIndex - 1)) {
        tmpAllSteps.push(lastIndex - 1)
        arrived.set(lastIndex - 1, true)
      }

      // 遍历
      cache.get(arr[lastIndex]).forEach((i) => {
        if (!arrived.has(i)) {
          tmpAllSteps.push(i)
          arrived.set(i, true)
        }
      })
    }
    step++
    allSteps = tmpAllSteps
    tmpAllSteps = []
  }
}
