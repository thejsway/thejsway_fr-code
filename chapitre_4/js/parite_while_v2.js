/* 
Exercice : afficher les nombres pairs jusqu'à 50
*/

// Solution utilisant l'opérateur modulo
var i = 2;
while (i <= 50) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}