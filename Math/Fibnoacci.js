const fibnacci = (n) => {
  const res = [0, 1];

  for (let i = 2; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2];
  }
  return res;
};

console.log(fibnacci(4)); // time complexity O(n)
