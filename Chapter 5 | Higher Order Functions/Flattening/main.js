let arr1 = [[1], [2, 3], [4, 5, 6]];

console.log(arr1.reduce((flat, current) => flat.concat(current), [])); // [1, 2, 3, 4, 5, 6]
