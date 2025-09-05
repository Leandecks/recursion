function fibs(n) {
  if (n === 0) return [];
  else if (n === 1) return [0];
  else if (n === 2) return [0, 1];

  let fibo = [0, 1];

  for (let i = 0; i < (n - 2); i++) {
    fibo.push(
      fibo.slice(fibo.length - 2)
        .reduce((a, b) => a + b, 0)
    )
  }

  return fibo;
}

console.log(fibs(5))
