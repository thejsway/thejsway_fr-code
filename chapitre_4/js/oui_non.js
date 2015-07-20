/* 
Exercice : jeu du ni oui, ni non
*/

var saisie = prompt("Voulez-vous jouer au ni oui, ni non ?");
while ((saisie != "oui") && (saisie != "non")) {
    saisie = prompt("Voulez-vous jouer au ni oui, ni non ?");
}
console.log("Vous avez perdu !");