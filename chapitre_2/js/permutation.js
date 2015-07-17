/* 
Exercice : inserver les valeurs des variables nombre1 et nombre2.
*/

var nombre1 = 5;
var nombre2 = 3;

// Solution 1 : utilisation d'une variable temporaire
var temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5

var nombre1 = 5;
var nombre2 = 3;

/* Solution 2 : utilisation de l'addition et de la soustraction
(ne fonctionne qu'avec des nombres) */
nombre1 = nombre1 + nombre2;
nombre2 = nombre1 - nombre2;
nombre1 = nombre1 - nombre2;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5