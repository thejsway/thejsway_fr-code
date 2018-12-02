// Carré d'un nombre

// Renvoie le carré de x
function carre1(x) {
  return x * x;
}

// Renvoie le carré de x
const carre2 = x => x * x;

console.log(carre1(0)); // 0
console.log(carre1(2)); // 4
console.log(carre1(5)); // 25

console.log(carre2(0)); // 0
console.log(carre2(2)); // 4
console.log(carre2(5)); // 25
