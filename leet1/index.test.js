const { twoSum } = require('./index')

test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9).reduce((a, b) => `${a}, ${b}`)).toBe('0, 1')
  expect(twoSum([3, 2, 4], 6).reduce((a, b) => `${a}, ${b}`)).toBe('1, 2')
  expect(twoSum([3, 3], 6).reduce((a, b) => `${a}, ${b}`)).toBe('0, 1')
})
