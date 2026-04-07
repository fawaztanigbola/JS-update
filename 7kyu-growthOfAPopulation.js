function nb_year(p0, percent, aug, p) {
  let years = 0;
  let population = p0;
  let rate = percent / 100;

  while (population < p) {
    population = Math.floor(population + population * rate + aug);
    years++;
  }

  return years;
}
