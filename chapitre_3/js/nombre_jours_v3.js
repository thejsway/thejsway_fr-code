/* 
Exercice : afficher le nombre de jours d'un mois
*/

var mois = Number(prompt("Entrez le numéro d'un mois :"));

/* Solution combinant if et switch.
Le if initial permet d'éliminer tous les mois inconnus.
Ensuite, la valeur par défaut de la variable nbJours permet d'économiser tous les tests
des mois ayant 31 jours */
if ((mois >= 1) && (mois <= 12)) {
    var nbJours = 31;
    switch (mois) {
    case 4:
    case 6:
    case 9:
    case 11:
        nbJours = 30;
        break;
    case 2: // ou default
        nbJours = 28;
        break;
    }
    console.log("Ce mois comporte " + nbJours + " jours.");
} else {
    console.log("Mois non reconnu !");
}