/* 
Exercice : prévoir les valeurs finales des variables
*/

var nb1 = prompt("Entrez nb1 :");
nb1 = Number(nb1);
var nb2 = prompt("Entrez nb2 :");
nb2 = Number(nb2);
var nb3 = prompt("Entrez nb3 :");
nb3 = Number(nb3);

if (nb1 > nb2) {
    nb1 = nb3 * 2;
} else {
    nb1++;
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3;
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
    }
}