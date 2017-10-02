const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('isRealString', () => {
  it('should reject non-string values', () => {
      expect(isRealString(12)).toBe(false);
      expect(isRealString(true)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString("    ")).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    expect(isRealString("   Lot R  ")).toBe(true);
  });
});
