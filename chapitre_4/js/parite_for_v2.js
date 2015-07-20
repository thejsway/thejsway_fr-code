/* 
Exercice : afficher les nombres pairs jusqu'à 50
*/

// Solution utilisant l'opérateur modulo
for (var i = 2; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}