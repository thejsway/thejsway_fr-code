/* 
Exercice : construire et afficher un triangle de 7 lignes
*/

var ligne = "";
var i = 1;
while (i <= 7) {
    ligne = ligne + "#";
    // Autre possibilité avec l'opérateur +=
    //ligne += "#";
    console.log(ligne);
    i++;
}