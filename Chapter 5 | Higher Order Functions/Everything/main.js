const every = (arr, predicate) => {
  for (let i of arr) {
    if (!predicate(i)) {
      return false;
    }
  }
  return true;
};

const every2 = (arr, predicate) => {
  return !arr.some(value => !predicate(value));
};

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
