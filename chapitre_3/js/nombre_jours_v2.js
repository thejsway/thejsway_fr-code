/* 
Exercice : afficher le nombre de jours d'un mois
*/

var mois = prompt("Entrez le numéro d'un mois :");

/* Solution avec un switch.
Notez l'absence d'instructions break dans certains case : on passe ainsi d'un cas
à un autre pour tous les mois ayant le même nombre de jours, jusqu'à arriver au
case qui affiche le message approprié et fait sortir du switch.
On limite ainsi la duplication du message affiché dans le code */
mois = Number(mois);
switch (mois) {
case 1:
case 3:
case 5:
case 7:
case 8:
case 10:
case 12:
    console.log("Ce mois comporte 31 jours.");
    break;
case 4:
case 6:
case 9:
case 11:
    console.log("Ce mois comporte 30 jours.");
    break;
case 2:
    console.log("Ce mois comporte 28 jours.");
    break;
default:
    console.log("Mois non reconnu !");
}