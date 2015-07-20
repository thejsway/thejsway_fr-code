/* 
Exercice : afficher les nombres pairs et impairs
*/

var nombre = prompt("Entrez le nombre initial :");
nombre = Number(nombre);
for (var i = nombre; i <= nombre + 10; i++) {
    if (i % 2 == 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
}