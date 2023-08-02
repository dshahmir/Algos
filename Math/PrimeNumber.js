const prime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n < 2) {
      return false;
    }
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

prime(9); // big-O (O(n))
