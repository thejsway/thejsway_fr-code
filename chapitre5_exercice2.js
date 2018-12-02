// Renvoie le minimum entre a et b
const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

// Solution alternative avec une déclaration de fonction
/* function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
} */

console.log(min(4.5, 5)); // 4.5
console.log(min(19, 9)); // 9
console.log(min(1, 1)); // 1
