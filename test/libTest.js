const assert = require('./wrappedAssert.js');
const lib = require('../src/lib.js');
const skipIfNotPresent = require('./skipIfNotPresent.js');
const {
  makeConstant
} = lib;

describe('makeConstant', () => {
  before(skipIfNotPresent(makeConstant));

  it('should return the constant provided when fn takes no arguments', () => {
    let constantlyReturnTwo = makeConstant(2);
    let constantlyReturnString = makeConstant('hello');
    let constantlyReturnArray = makeConstant([1, 2, 3]);
    let constantlyReturnObject = makeConstant({a: 1, b: 2});
    assert._equal(2, constantlyReturnTwo);
    assert._equal('hello', constantlyReturnString);
    assert._deepEqual([1, 2, 3], constantlyReturnArray);
    assert._deepEqual({a: 1, b: 2}, constantlyReturnObject);
  });

});
