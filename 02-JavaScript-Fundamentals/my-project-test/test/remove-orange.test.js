const { expect } = require('chai');
const { describe, it } = require('mocha');
const removeOranges = require('../remove-oranges-function');

describe('removeOranges', () => {
  it('should remove all occurrences of "orange" from the array', () => {
    const fruitArray = ["apple", "orange", "banana", "orange", "grape"];
    const result = removeOranges(fruitArray);
    expect(result).to.deep.equal(["apple", "banana", "grape"]);
  });

  it('should not modify the array if there are no "orange" elements', () => {
    const fruitArray = ["apple", "banana", "grape"];
    const result = removeOranges(fruitArray);
    expect(result).to.deep.equal(["apple", "banana", "grape"]);
  });

  it('should handle an empty array', () => {
    const fruitArray = [];
    const result = removeOranges(fruitArray);
    expect(result).to.deep.equal([]);
  });

  it('should handle an array with only "orange" elements', () => {
    const fruitArray = ["orange", "orange", "orange"];
    const result = removeOranges(fruitArray);
    expect(result).to.deep.equal([]);
  });

  it('should handle an array with mixed elements', () => {
    const fruitArray = ["apple", "orange", "banana", "grape", "orange", "kiwi"];
    const result = removeOranges(fruitArray);
    expect(result).to.deep.equal(["apple", "banana", "grape", "kiwi"]);
  });
});
