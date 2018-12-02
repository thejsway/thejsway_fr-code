// Permutation de variables

let nombre1 = 5;
let nombre2 = 3;

// Solution classique utilisant une variable temporaire
const temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;

// Solution alternative valable uniquement pour des nombres
/* nombre1 += nombre2;
nombre2 = nombre1 - nombre2;
nombre1 -= nombre2; */

console.log(nombre1); // 3
console.log(nombre2); // 5
