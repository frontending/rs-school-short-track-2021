/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const res = [];
  let mem = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i !== j) {
        mem += str[j];
      }
    }
    res.push(Number(mem));
    mem = 0;
  }
  res.sort((a, b) => b - a);
  return res[0];
}

module.exports = deleteDigit;
