function fibsRec(n) {
  if (n === 0) return [];
  else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  return fibsRec(n - 1)
    .concat(fibsRec(n - 1)
      .slice(n - 3)
      .reduce((a, b) => a + b, 0));
}

console.log(fibsRec(7))
