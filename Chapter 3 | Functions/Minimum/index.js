const min = (a, b) => {
  if (a > b) {
    return b;
  }
  return a;
};

min(2, 10); // 2
min(17, 8); // 8
