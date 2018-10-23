const makeConstant = function(constant) {
  return function() {
    return constant;
  };
};

module.exports = {
  makeConstant
};
