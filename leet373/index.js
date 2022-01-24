// 给定两个以 升序排列 的整数数组 nums1 和 nums2 , 以及一个整数 k 。

// 定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。

// 请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  if (nums1.length <= 0 || nums2.length <= 0) {
    return []
  }

  if (nums1.length > k || nums2.length > k) {
    return kSmallestPairs(nums1.slice(0, k), nums2.slice(0, k), k)
  }

  const now = nums2.map((d) => [nums1[0], d]).slice(0, k)

  const tmp = kSmallestPairs(nums1.slice(1, k), nums2, k)

  if (tmp.length <= 0) {
    return now
  }

  if (now.length === k && now[k - 1][0] + now[k - 1][1] <= tmp[0][0] + tmp[0][1]) {
    return now
  }

  let result = []
  let ni = 0
  let ti = 0

  for (let i = 0; i < k; i++) {
    if (now.length <= ni) {
      result = result.concat(tmp.slice(ti)).slice(0, k)
      break
    }
    if (tmp.length <= ti) {
      result = result.concat(now.slice(ti)).slice(0, k)
      break
    }
    if (now[ni][0] + now[ni][1] <= tmp[ti][0] + tmp[ti][1]) {
      result.push(now[ni])
      ni++
    } else {
      result.push(tmp[ti])
      ti++
    }
  }
  return result
}

var kSmallestPairs2 = function (nums1, nums2, k) {
  if (nums1.length <= 0 || nums2.length <= 0) {
    return []
  }

  let result = []
  let indexArr = []
  indexArr.push([0, 0])

  for (let i = 0; i < k; i++) {
    if (result.length >= k) {
      break
    }
    if (indexArr.length <= 0) {
      break
    }
    // 移除最小的index
    let current = indexArr.shift()
    // 添加后继节点
    // 第一个列时 需要再加一行
    if (current[1] === 0 && current[0] < nums1.length - 1) {
      const sum = nums1[current[0] + 1] + nums2[current[1]]
      const tmp = indexArr.find((s) => nums1[s[0]] + nums2[s[1]] > sum)
      if (!tmp) {
        indexArr.push([current[0] + 1, current[1]])
      } else {
        indexArr.splice(indexArr.indexOf(tmp), 0, [current[0] + 1, current[1]])
      }
    }
    // 再加一列
    if (current[1] < nums2.length - 1) {
      const sum = nums1[current[0]] + nums2[current[1] + 1]
      const tmp = indexArr.find((s) => nums1[s[0]] + nums2[s[1]] > sum)
      if (!tmp) {
        indexArr.push([current[0], current[1] + 1])
      } else {
        indexArr.splice(indexArr.indexOf(tmp), 0, [current[0], current[1] + 1])
      }
    }
    // 添加数据
    result.push([nums1[current[0]], nums2[current[1]]])
  }
  return result
}
