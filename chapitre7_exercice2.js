// Somme des valeurs

const nombres = [11, 3, 7, 2, 9, 10];

let somme = 0;

// Solution avec la méthode forEach()
nombres.forEach(nombre => {
  somme += nombre;
});

// Solution alternative avec une boucle for-of
/* for (const nombre of nombres) {
  somme += nombre;
} */

console.log(somme);
