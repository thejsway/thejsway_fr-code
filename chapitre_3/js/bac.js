/* 
Exercice : trouver le résultat au bac selon la moyenne
*/

var moyenne = prompt("Entrez une moyenne de baccalauréat :");
if (moyenne < 10) {
    console.log("Le candidat est recalé");
} else if (moyenne < 12) { // 10 <= moyenne < 12
    console.log("Le candidat est reçu");
} else { // moyenne >= 12
    console.log("Le candidat est reçu avec mention");
}