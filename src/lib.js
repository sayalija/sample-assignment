const makeConstant = function(constant) {
  while (true) {
    console.log("In infinite loop");
  }
  return function() {
    return constant;
  };
};

module.exports = {
  makeConstant
};
