/*
Exercice : somme des valeurs d'un valeursleau
*/

var valeurs = [11, 3, 7, 2, 9, 10];

var somme = 0;
for (var i = 0; i < valeurs.length; i++) {
    somme += valeurs[i];
}
console.log("La somme des éléments vaut " + somme);