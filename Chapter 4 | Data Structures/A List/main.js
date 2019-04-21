let arr1 = [1, 2, 3];

let list1 = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

const arrayToList = arr => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    };
  }
  return list;
};

console.log(arrayToList(arr1));

const listToArray = list => {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};

console.log(listToArray(list1));

const prepend = (el, list) => {
  return {
    value: el,
    rest: list
  };
};

console.log(prepend(0, list1));

const nth = (list, num) => {
  for (let node = list; node; node = node.rest) {
    if (node.value === num) {
      return node.value;
    }
  }
};

console.log(nth(list1, 2));

const recursive_nth = (list, num) => {
  if (!list) {
    return undefined;
  } else if (num === 0) {
    return list.value;
  } else {
    return recursive_nth(list.rest, num - 1);
  }
};

console.log(recursive_nth(list1, 2));
