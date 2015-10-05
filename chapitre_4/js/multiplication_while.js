/* 
Exercice : table de multiplication
*/

var nombre = 0; // Valeur par défaut permettant d'entrer dans la boucle
while ((nombre < 2) || (nombre > 9)) {
    nombre = Number(prompt("Entrez un nombre entre 2 et 9 : "));
}

console.log("Voici la table de multiplication de " + nombre);
var i = 1;
while (i <= 10) {
    console.log(nombre + " x " + i + " = " + (nombre * i));
    i++;
}