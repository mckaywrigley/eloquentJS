const range = (start, end) => {
  let arr = [];
  for (let i = start; i < end + 1; i++) {
    arr.push(i);
  }
  return arr;
};

const sum = arr => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

const rangeWithStep = (start, end, step) => {
  let arr = [];
  if (step) {
    for (let i = start; i < end + 1; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i < end + 1; i++) {
      arr.push(i);
    }
  }

  return arr;
};
