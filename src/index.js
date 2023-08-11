module.exports = function reverse (n) {
  let stringNum = String(Math.abs(n));
  let result = "";
  for (let i = 0; i < stringNum.length; i++) {
    result = `${stringNum[i]}${result}`;
  }
  return result;
}
