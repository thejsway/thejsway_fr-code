/* 
Exercice : inserver les valeurs des variables nombre1 et nombre2.
*/

var nombre1 = 5;
var nombre2 = 3;

// Solution utilisant d'une variable temporaire
var temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5