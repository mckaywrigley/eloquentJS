const reverseArray = arr => {
  let reversedArr = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i]);
  }
  return reversedArr;
};

const reverseArrayInPlace = arr => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
  return arr;
};
