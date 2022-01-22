const {
  removePalindromeSub
} = require('./index')

test('removePalindromeSub', () => {
  expect(removePalindromeSub('ababa')).toBe(1);
  expect(removePalindromeSub('abb')).toBe(2)
  expect(removePalindromeSub('baabb')).toBe(2)
});