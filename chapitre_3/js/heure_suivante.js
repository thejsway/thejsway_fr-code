/* 
Exercice : afficher l'heure une seconde plus tard
*/

var heures = Number(prompt("Entrez les heures :"));
var minutes = Number(prompt("Entrez les minutes :"));
var secondes = Number(prompt("Entrez les secondes :"));
// On teste tous les cas d'erreur
if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
    (secondes >= 0) && (secondes <= 59)) {
    secondes++; // On incrémente les secondes
    if (secondes === 60) {
        // Il faut mettre les secondes à 0 et passer à la minute suivante
        secondes = 0;
        minutes++;
        if (minutes === 60) {
            // Il faut mettre les minutes à 0 et passer à l'heure suivante
            minutes = 0;
            heures++;
            if (heures === 24) { // L'heure suivante est minuit
                heures = 0;
            }
        }
    }
    console.log("Dans une seconde, il sera " + heures + " heures, " +
        minutes + " minutes et " + secondes + " secondes");
} else {
    console.log("Heure incorrecte !");
}