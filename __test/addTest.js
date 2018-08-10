const assert=require("chai").assert;
const add=require("../src/basic.js").add;

describe("add test", function() {
  it("should add 10 and 21 numbers", function() {
    assert.equal(add(10,21), 31);
  });

  it("should add -2 and 66 numbers", function() {
    assert.equal(add(-2,66), 64);
  });
});
