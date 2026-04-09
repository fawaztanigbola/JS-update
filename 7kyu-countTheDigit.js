function nbDig(n, d) {
    // your code
  let total = 0;

  for (let k = 0; k <= n; k++) {
    const square = (k * k).toString();
    for (const digit of square) {
      if (digit === String(d)) total++;
    }
  }

  return total;
}
