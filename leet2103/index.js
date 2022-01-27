// 给你一个在 X-Y 平面上的点构成的数据流。设计一个满足下述要求的算法：

// 添加 一个在数据流中的新点到某个数据结构中。可以添加 重复 的点，并会视作不同的点进行处理。
// 给你一个查询点，请你从数据结构中选出三个点，使这三个点和查询点一同构成一个 面积为正 的 轴对齐正方形 ，统计 满足该要求的方案数目。
// 轴对齐正方形 是一个正方形，除四条边长度相同外，还满足每条边都与 x-轴 或 y-轴 平行或垂直。

// 实现 DetectSquares 类：

// DetectSquares() 使用空数据结构初始化对象
// void add(int[] point) 向数据结构添加一个新的点 point = [x, y]
// int count(int[] point) 统计按上述方式与点 point = [x, y] 共同构造 轴对齐正方形 的方案数。

var DetectSquares = function () {
  this.pointY = new Map()
  this.pointX = new Map()
}

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  let pointX = point[0]
  let pointY = point[1]

  if (this.pointX.has(pointX)) {
    // 第一层
    let first = this.pointX.get(pointX)
    // 第二层
    if (first.has(pointY)) {
      first.set(pointY, first.get(pointY) + 1)
    } else {
      first.set(pointY, 1)
    }
  } else {
    let second = new Map()
    second.set(pointY, 1)
    this.pointX.set(pointX, second)
  }

  if (this.pointY.has(pointY)) {
    let first = this.pointY.get(pointY)
    if (first.has(pointX)) {
      first.set(pointX, first.get(pointX) + 1)
    } else {
      first.set(pointX, 1)
    }
  } else {
    let second = new Map()
    second.set(pointX, 1)
    this.pointY.set(pointY, second)
  }
}

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  let result = 0
  let x = point[0]
  let y = point[1]

  if (!this.pointX.has(x) || !this.pointY.has(y)) {
    return 0
  }

  let samCol = this.pointX.get(x)

  for (let key of samCol.keys()) {
    if (key == y) {
      continue
    }
    let areaLength = key - y
    let x1 = x - areaLength
    let x2 = x + areaLength
    // 垂直方向的点
    let point1Count = samCol.get(key)
    if (point1Count == 0) {
      continue
    }

    if (!this.pointY.has(key)) {
      continue
    }

    if (this.pointY.get(y).get(x1) && this.pointY.get(key).get(x1)) {
      result = result + point1Count * this.pointY.get(y).get(x1) * this.pointY.get(key).get(x1)
    }

    if (this.pointY.get(y).get(x2) && this.pointY.get(key).get(x2)) {
      result = result + point1Count * this.pointY.get(y).get(x2) * this.pointY.get(key).get(x2)
    }
  }
  return result
}
module.exports = {
  DetectSquares
}
