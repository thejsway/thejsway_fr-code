/* 
Exercice : afficher les nombres pairs et impairs
*/

var nombre = Number(prompt("Entrez le nombre initial :"));

for (var i = nombre; i < nombre + 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
}