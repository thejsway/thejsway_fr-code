/* 
Exercice : comparer deux nombres
*/

var nombre1 = prompt("Entrez le nombre 1 :");
nombre1 = Number(nombre1);
var nombre2 = prompt("Entrez le nombre 2 :");
nombre2 = Number(nombre2);
if (nombre1 < nombre2) {
    console.log(nombre1 + " est plus petit que " + nombre2);
} else if (nombre1 > nombre2) {
    console.log(nombre1 + " est plus grand que " + nombre2);
} else {
    console.log(nombre1 + " et " + nombre2 + " sont égaux");
}