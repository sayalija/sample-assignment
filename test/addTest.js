const assert=require("chai").assert;
const add=require("../src/basic.js").add;

describe("add test", function() {
  it("should add 2 numbers", function() {
    assert.equal(add(10,21), 31);
  });
});
