/* 
Exercice : comparer deux nombres
*/

var nombre1 = Number(prompt("Entrez le nombre 1 :"));
var nombre2 = Number(prompt("Entrez le nombre 2 :"));

if (nombre1 < nombre2) {
    console.log(nombre1 + " est plus petit que " + nombre2);
} else if (nombre1 > nombre2) {
    console.log(nombre1 + " est plus grand que " + nombre2);
} else {
    console.log(nombre1 + " et " + nombre2 + " sont égaux");
}