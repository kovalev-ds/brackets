module.exports = function check(str, bracketsConfig) {
  return (
    [...str].reduce(
      (stack, v) =>
        bracketsConfig.some(
          ([left, right]) => stack[stack.length - 1] === left && v === right
        )
          ? (stack.pop(), stack)
          : (stack.push(v), stack),
      []
    ).length === 0
  );
};
