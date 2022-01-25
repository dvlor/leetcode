const { numberOfMatches } = require('./index')

test('numberOfMatches', () => {
  expect(numberOfMatches(7)).toBe(6)
  expect(numberOfMatches(14)).toBe(13)
})
