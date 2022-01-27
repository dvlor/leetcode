const { countValidWords } = require('./index')

test('countValidWords', () => {
  expect(countValidWords('cat and  dog')).toBe(3)
  expect(countValidWords('!this  1-s b8d!')).toBe(0)
  expect(countValidWords('alice and  bob are playing stone-game10')).toBe(5)
  expect(countValidWords('he bought 2 pencils, 3 erasers, and 1  pencil-sharpener.')).toBe(6)
})
