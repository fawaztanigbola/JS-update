function permutationAverage(n){
  var sum = 0;
  
  n = n.toString();
  for (var i = 0; i < n.length; i++) {
    sum += parseInt(n);
    n = n.slice(-1) + n.substring(0, n.length - 1)
    }
  return Math.round(sum/(n.length));
}
