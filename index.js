
function sum(fromN, toN) {
  let val = fromN
  if (fromN === toN) {
    return val
  }
  console.log(val)
  return val + sum(fromN + 1, toN) // first loop
}

console.log(sum(3, 7))
module.exports = sum;

// 3, 4, 5, 6, 7 = 25
